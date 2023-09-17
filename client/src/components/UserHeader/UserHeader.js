import React from "react";

import { FiCamera } from "react-icons/fi";
import {
  Cover,
  Photo,
  Image,
  Info,
  Label,
  ImageIcon,
  ImageIcon2,
  Inputs,
  P,
  Button,
  Bio,
  Input,
} from "./UserHeaderStyle";
import { useUserStore } from "../../UserStore";

const UserHeader = {
  DefaultUserHeader: (props) => {
    const currentUser = useUserStore((state) => state.user);
    const { username, EditProfile, user } = props;

    return (
      <div>
        <Cover>
          <img
            src={
              username === currentUser.username ? currentUser.cover : user.cover
            }
            alt="cover"
          />
        </Cover>

        <Photo>
          <Image>
            <img
              alt="user"
              src={
                username === currentUser.username
                  ? currentUser.photo
                  : user.photo
              }
            />
          </Image>

          {username === currentUser.username ? (
            <Button main="true" onClick={EditProfile}>
              Edit Profile
            </Button>
          ) : (
            ""
          )}
        </Photo>
        {username === currentUser.username ? (
          <Info>
            <P>{currentUser.name}</P>
            <P secondary="true">{currentUser.email}</P>
            <Bio>{currentUser.bio}</Bio>
          </Info>
        ) : (
          <Info>
            <P>{props.user.name}</P>
            <P secondary>{props.user.email}</P>
            <Bio>{props.user.bio}</Bio>
          </Info>
        )}
      </div>
    );
  },

  EditUserHeader: (props) => {
    const currentUser = useUserStore((state) => state.user);

    const {
      user,
      username,
      getCoverImage,
      getUserImage,
      coverImage,
      userImage,
      closeEdit,
      saveEdit,
      nameChange,
      emailChange,
      bioChange,
      nameRef,
      emailRef,
      bioRef,
    } = props;

    return (
      <div>
        <Cover>
          <input id="coverImage" type="file" onChange={getCoverImage} />
          <Label>
            <label htmlFor="coverImage">
              <ImageIcon>
                <FiCamera />
              </ImageIcon>
              <img
                src={coverImage ? coverImage : currentUser.cover}
                alt="coverImage"
              />
            </label>
          </Label>
        </Cover>
        <Photo>
          <Image>
            <input type="file" id="userImage" onChange={getUserImage} />
            <Label>
              <label htmlFor="userImage">
                <ImageIcon2>
                  <FiCamera />
                </ImageIcon2>
                <img
                  src={userImage ? userImage : currentUser.photo}
                  alt="user"
                />
              </label>
            </Label>
          </Image>
          {username === currentUser.username ? (
            <div>
              <Button main="true" onClick={closeEdit}>
                cancel
              </Button>
              <Button onClick={saveEdit}>save</Button>
            </div>
          ) : (
            ""
          )}
        </Photo>
        <Inputs>
          <Input
            onChange={nameChange}
            ref={nameRef}
            type="text"
            placeholder="Your name"
            name="name"
            defaultValue={currentUser.name}
          />
          <Input
            onChange={emailChange}
            ref={emailRef}
            type="text"
            placeholder="Your email"
            name="email"
            defaultValue={currentUser.email}
          />
          <Input
            onChange={bioChange}
            ref={bioRef}
            type="text"
            placeholder="Your Bio"
            name="Bio"
            defaultValue={currentUser.bio}
          />
        </Inputs>
      </div>
    );
  },
};

export default UserHeader;
