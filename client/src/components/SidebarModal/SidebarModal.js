import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import { AiFillFire } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { IoIosPulse } from "react-icons/io";
import {
  Li,
  Ul,
  P,
  SidebarOptions,
  Border,
  DivPhoto,
  Link,
  Span,
} from "./SidebarModalStyle";
import Container from "../container/Container";
import { signout } from "../../UserStore";
import { useUserStore } from "../../UserStore";

const SidebarModal = () => {
  const currentUser = useUserStore((state) => state.user);

  const handleLogout = () => {
    try {
      signout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <SidebarOptions>
        <Container>
          <Span>
            <DivPhoto>
              <img alt="user" src={currentUser.photo} />

              <P>{currentUser.username}</P>
              <P primary="true">{currentUser.email}</P>
            </DivPhoto>
            <Border />
            <Ul>
              <BsFolder2Open
                size={20}
                style={{ marginRight: 10 }}
                color="	#A9A9A9"
              />
              <Li>Topics</Li>
            </Ul>
            <Ul>
              <IoIosFlash
                size={20}
                style={{ marginRight: 10 }}
                color="#A9A9A9"
              />
              <Li>Momments</Li>
            </Ul>
            <Ul>
              <AiFillFire
                size={20}
                style={{ marginRight: 10 }}
                color="	#A9A9A9"
              />
              <Li>Promote Mode</Li>
            </Ul>
            <Ul>
              <HiOutlineExternalLink
                size={20}
                style={{ marginRight: 10 }}
                color="	#A9A9A9"
              />
              <Li>Twitter Ads</Li>
            </Ul>
            <Ul>
              <IoIosPulse
                size={20}
                style={{ marginRight: 10 }}
                color="	#A9A9A9"
              />
              <Li>Analytics</Li>
            </Ul>
            <Border />
            <Ul>
              <FiSettings
                size={20}
                style={{ marginRight: 10 }}
                color="	#A9A9A9"
              />
              <Li>Settings and privacy</Li>
            </Ul>
            <Ul>
              <FiHelpCircle
                size={20}
                style={{
                  marginRight: 10,
                }}
                color="	#A9A9A9"
              />
              <Li>Help Center</Li>
            </Ul>
            <Link to="/display">
              <Ul>
                <BiEdit size={20} style={{ marginRight: 10 }} color="	#A9A9A9" />
                <Li>Display</Li>
              </Ul>
            </Link>
            <Border />

            <Ul onClick={handleLogout}>
              <Li>Log out</Li>
            </Ul>
          </Span>
        </Container>
      </SidebarOptions>
    </React.Fragment>
  );
};

export default SidebarModal;
