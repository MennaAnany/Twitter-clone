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
import userImage2 from "../../img/Viper_icon.webp";
import userCover from "../../img/default-cover.jpg";

const UserHeader = {
  DefaultUserHeader: (props) => {
    return (
      <div>
        <Cover>
          <img src={userCover} alt="user cover" />
        </Cover>
        <Photo>
          <Image>
            <img alt="user" src={userImage2} />
          </Image>
          <Button main onClick={props.EditProfile}>
            Edit Profile
          </Button>
        </Photo>
        <Info>
          <P>viper</P>
          <P secondary>@Viper_valorant</P>
          <Bio>Welcome to my profile.</Bio>
        </Info>
      </div>
    );
  },

  EditUserHeader: (props) => {
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
    // const userSelf = useSelector((state) => state.user.user.username);

    return (
      <div>
        <Cover>
          <input id="coverImage" type="file" onChange={getCoverImage} />
          <Label>
            <label htmlFor="coverImage">
              <ImageIcon>
                <FiCamera />
              </ImageIcon>
              <img src={coverImage ? coverImage : userCover} alt="user cover" />
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
                <img src={userImage ? userImage : userImage2} alt="user" />
              </label>
            </Label>
          </Image>
          <div>
            <Button main onClick={closeEdit}>
              cancel
            </Button>
            <Button onClick={saveEdit}>save</Button>
          </div>
        </Photo>
        <Inputs>
          <Input
            onChange={nameChange}
            ref={nameRef}
            type="text"
            placeholder="Your Name"
            name="name"
            defaultValue={user.name}
          />
          <Input
            onChange={emailChange}
            ref={emailRef}
            type="text"
            placeholder="Your email"
            name="email"
            defaultValue={user.email}
          />
          <Input
            onChange={bioChange}
            ref={bioRef}
            type="text"
            placeholder="Your Bio"
            name="Bio"
            defaultValue={user.Bio}
          />
        </Inputs>
      </div>
    );
  },
};

export default UserHeader;
