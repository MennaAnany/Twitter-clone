import {} from "../Notifications/NotificationsStyle";
import { Grid } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { H4, Div, Header, Button, Gridd } from "./ProfileStyle";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Border } from "../Home/HomeStyle";
import UserHeader from "../../components/UserHeader/UserHeader";
import Tweet from "../../components/Tweet/Tweet";
import axios from "../../axios";
import { Spinner } from "../../components/Tweets/TweetsStyle";
import { useUserActions } from "../../UserStore";
import { useUserStore } from "../../UserStore";
export const Profile = () => {
  const navigate = useNavigate();
  const currentUser = useUserStore((state) => state.user);
  const { updateUser } = useUserActions();
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [edit, setedit] = useState(false);
  const [userImage, setUserImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const [tweetsNum, setTweetsnum] = useState();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const bioRef = useRef(null);
  const [userUpdatedData, setUserUpdatedData] = useState({});
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserImage = (e) => {
    let file;
    file = e.target.files[0];

    if (file) {
      setUserUpdatedData((prev) => {
        return { ...prev, photo: file };
      });

      let reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const getCoverImage = (e) => {
    let file;
    file = e.target.files[0];
    if (file) {
      setUserUpdatedData((prev) => {
        return { ...prev, cover: file };
      });
      let reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const nameChange = (e) => {
    setUserUpdatedData((prev) => {
      return { ...prev, name: nameRef.current.value };
    });
  };

  const emailChange = (e) => {
    setUserUpdatedData((prev) => {
      return { ...prev, email: emailRef.current.value };
    });
  };
  const bioChange = (e) => {
    setUserUpdatedData((prev) => {
      return { ...prev, Bio: bioRef.current.value };
    });
  };

  const EditProfile = () => {
    setedit(true);
  };

  const closeEdit = () => {
    setedit(false);
    setUserUpdatedData({});
    setUserImage(null);
    setCoverImage(null);
  };

  const saveEdit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", nameRef.current.value);
      formData.append("email", emailRef.current.value);
      formData.append("bio", bioRef.current.value);
      formData.append("cover", userUpdatedData.cover);
      formData.append("photo", userUpdatedData.photo);
      await updateUser({ user: formData });
      closeEdit();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);
      try {
        const user = await axios.get(`users/${username}`);
        setUser(user.data.data.data);
        const response = await axios.get(`tweets/${username}`);
        setTweets(response.data.data.data);
        setTweetsnum(response.data.data.data.length);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchTweets();
  }, [username]);

  return (
    <>
      <Gridd container>
        <Grid item xs={27}>
          <Div>
            <Button onClick={() => navigate(-1)}>
              <MdArrowBack />
            </Button>
            <Header>
              <H4>{currentUser.name}</H4>
              <H4 subheader="true">{tweetsNum} tweets</H4>
            </Header>
          </Div>
          {loading ? (
            <Spinner size={80} thickness={4} />
          ) : (
            <React.Fragment>
              {edit ? (
                <UserHeader.EditUserHeader
                  user={user}
                  username={username}
                  closeEdit={closeEdit}
                  getCoverImage={getCoverImage}
                  getUserImage={getUserImage}
                  nameChange={nameChange}
                  emailChange={emailChange}
                  saveEdit={saveEdit}
                  bioChange={bioChange}
                  nameRef={nameRef}
                  emailRef={emailRef}
                  bioRef={bioRef}
                  userImage={userImage}
                  coverImage={coverImage}
                />
              ) : (
                <UserHeader.DefaultUserHeader
                  user={user}
                  username={username}
                  EditProfile={EditProfile}
                />
              )}
              <Border />

              {tweets?.map((tweet, i) => (
                <Tweet tweet={tweet} key={i} />
              ))}
            </React.Fragment>
          )}
        </Grid>
      </Gridd>
    </>
  );
};

export default Profile;
