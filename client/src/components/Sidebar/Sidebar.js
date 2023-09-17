import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";
import { RiHashtag } from "react-icons/ri";
import { FiMail, FiMoreHorizontal } from "react-icons/fi";
import { IoMdNotificationsOutline, IoIosAdd } from "react-icons/io";
import SidebarModal from "../SidebarModal/SidebarModal";
import { BsTwitter } from "react-icons/bs";
import {
  Li,
  Button,
  P,
  Img,
  Btn,
  Ul,
  Nav,
  Links,
  Border,
} from "./SidebarStyle";
import Backdrop from "@mui/material/Backdrop";
import SidebarItem from "../SidebarItem/SidebarItem";
import { useUserStore } from "../../UserStore";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useUserStore((state) => state.user);

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
          <SidebarItem to="/home" icon={<BsTwitter />} />
          <SidebarItem to="/home" icon={<AiOutlineHome />} text={"Home"} />
          <SidebarItem to="/home" icon={<RiHashtag />} text={"Explore"} />
          <SidebarItem
            to="/notifications"
            icon={<IoMdNotificationsOutline />}
            text={"Notifications"}
          />
          <SidebarItem to="/home" icon={<FiMail />} text={"Messages"} />
          <SidebarItem to="/home" icon={<FaRegBookmark />} text={"Bookmarks"} />
          <SidebarItem
            to="/home"
            icon={<AiOutlineUnorderedList />}
            text={"Lists"}
          />

          <Li>
            <Links to={`/users/${currentUser.username}`}>
              <Img alt="user" src={currentUser.photo} />
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
      <Border />

      {isOpen ? <SidebarModal showModal={showModal} /> : null}
    </React.Fragment>
  );
};

export default Sidebar;
