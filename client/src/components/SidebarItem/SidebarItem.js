import { Li, P, Links, Span } from "../Sidebar/SidebarStyle";
const SidebarItem = (props) => {
  return (
    <Li>
      <Links to={props.to}>
        <Span> {props.icon}</Span>
        <P>{props.text}</P>
      </Links>
    </Li>
  );
};

export default SidebarItem;
