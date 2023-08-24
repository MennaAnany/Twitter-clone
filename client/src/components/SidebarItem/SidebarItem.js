import { Li, P, Links } from "../Sidebar/SidebarStyle";
const SidebarItem = (props) => {
  return (
    <Li>
      <Links to={props.to}>
        <span> {props.icon}</span>
        <P>{props.text}</P>
      </Links>
    </Li>
  );
};

export default SidebarItem;
