import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Span = styled.div(
  ({ theme }) => `
  background-color: ${theme.colors.bgPrimary};
  box-shadow: 4px 3px 20px 5px ${theme.colors.shadowColor};
  width: 24.5rem;
  border-radius: 0.9rem;
  position: relative;
`
);

export const Ul = styled.ul(
  ({ theme }) => `
  color: ${theme.colors.textSecondry};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 1.9rem 0.5rem;
  transition: all 0.3s;
  overflow: hidden;
  color: currentColor;
  padding-left: 1.5rem;
  font-family: "Cairo", "sans-serif";

  &:hover {
    background-color: ${theme.colors.bgHover};
  }
`
);

export const Li = styled.li`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: "Roboto", "sans-serif";
  font-size: 1.7rem;
  list-style: none;
`;

export const DivPhoto = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    padding-bottom: 1rem;
  }
`;

export const P = styled.p(
  (props) => `
  color: ${
    props.Primary
      ? props.theme.colors.textSecondry
      : props.theme.colors.textPrimary
  };
  
  margin-top: 0.4rem;
  font-size: 1.7rem;
`
);

export const SidebarOptions = styled.nav`
  width: 100%;
  height: 100%;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: currentColor;
`;

export const Border = styled.p`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
