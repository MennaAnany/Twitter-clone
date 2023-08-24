import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";
import { RiHashtag } from "react-icons/ri";
import { FiMail, FiMoreHorizontal } from "react-icons/fi";
import { IoMdNotificationsOutline, IoIosAdd } from "react-icons/io";
import SidebarModal from "../SidebarModal/SidebarModal";
import { BsTwitter } from "react-icons/bs";
import { Li, Button, P, Img, Btn, Ul, Nav, Links } from "./SidebarStyle";
import Backdrop from "@mui/material/Backdrop";
import SidebarItem from "../SidebarItem/SidebarItem";
import userImage from "../../img/Viper_icon.webp";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <Nav>
        <Ul>
          <SidebarItem to="/home" icon={<BsTwitter size={26} />} />
          <SidebarItem
            to="/home"
            icon={<AiOutlineHome size={26} />}
            text={"Home"}
          />
          <SidebarItem
            to="/explore"
            icon={<RiHashtag size={26} />}
            text={"Explore"}
          />
          <SidebarItem
            to="/notifications"
            icon={<IoMdNotificationsOutline size={26} />}
            text={"Notifications"}
          />
          <SidebarItem
            to="/messages"
            icon={<FiMail size={26} />}
            text={"Messages"}
          />
          <SidebarItem
            to="/bookmarks"
            icon={<FaRegBookmark size={26} />}
            text={"Bookmarks"}
          />
          <SidebarItem
            to="/lists"
            icon={<AiOutlineUnorderedList size={26} />}
            text={"Lists"}
          />

          <Li>
            <Links to={`/profile`}>
              <Img alt="user" src={userImage} />
              <P>Profile</P>
            </Links>
          </Li>
          <Li onClick={showModal}>
            <Btn onClick={showModal}>
              <FiMoreHorizontal size={26} />
              <P>More</P>
            </Btn>
          </Li>
          <Li>
            <Button>
              <h4>Tweet</h4>
              <IoIosAdd />
            </Button>
          </Li>
        </Ul>
        <Backdrop
          open={isOpen}
          onClick={closeModal}
          sx={{ bgcolor: "Transparent" }}
        ></Backdrop>
      </Nav>
      {isOpen ? <SidebarModal showModal={showModal} /> : null}
    </React.Fragment>
  );
};

export default Sidebar;
