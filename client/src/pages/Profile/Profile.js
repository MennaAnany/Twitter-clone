import {} from "../Notifications/NotificationsStyle";
import { Grid } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { H4, Div, Header, Button, Gridd } from "./ProfileStyle";
import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Border } from "../Home/HomeStyle";
import UserHeader from "../../components/UserHeader/UserHeader";
import Tweet from "../../components/Tweets/Tweets";

export const Profile = () => {
  const navigate = useNavigate();

  const [userUpdatedData, setUserUpdatedData] = useState({});
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [edit, setedit] = useState(false);
  const [userImage, setUserImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const bioRef = useRef(null);

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

  return (
    <>
      <Gridd>
        <Grid>
          <Div>
            <Button onClick={() => navigate(-1)}>
              <MdArrowBack />
            </Button>
            <Header>
              <H4>viper</H4>
              <H4 subHeader>0 tweets</H4>
            </Header>
          </Div>

          {edit ? (
            <UserHeader.EditUserHeader
              user={user}
              username={username}
              closeEdit={closeEdit}
              getCoverImage={getCoverImage}
              getUserImage={getUserImage}
              nameChange={nameChange}
              emailChange={emailChange}
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
          <Tweet />
        </Grid>
      </Gridd>
    </>
  );
};
export default Profile;
