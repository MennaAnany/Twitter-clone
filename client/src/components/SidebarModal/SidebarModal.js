import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import { AiFillFire } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { IoIosPulse } from "react-icons/io";
import userImage from "../../img/Viper_icon.webp";
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
const SidebarModal = () => {
  return (
    <React.Fragment>
      <SidebarOptions>
        <Container>
          <Span>
            <DivPhoto>
              <img alt="user" src={userImage} />

              <P>viper</P>
              <P Primary>@Viper_valorant</P>
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
            <Ul>
              <Li>Log out</Li>
            </Ul>
          </Span>
        </Container>
      </SidebarOptions>
    </React.Fragment>
  );
};

export default SidebarModal;
