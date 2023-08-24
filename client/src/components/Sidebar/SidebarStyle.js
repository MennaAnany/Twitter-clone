import styled from "styled-components";
import { Link } from "react-router-dom";

export const Li = styled.li(
  ({ theme }) => `
  color: ${theme.colors.textPrimary};
  list-style: none;
  padding: 0.8rem 1.7rem;
  border-radius: 3.5rem;
  margin-bottom: 1.4rem;
  outline: none;
  cursor: pointer;


  &:hover {
    background-color:${theme.themeColors.hover};
    color: ${theme.themeColors.color};
  }

  &:last-child {
    background: none;
    list-style: none;


  }
  &:first-child  {
    background: none;
    padding: 0.8rem;

    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    
    &:hover {
      background-color:${theme.themeColors.hover};
      border-radius: 50%;
    }
}
`
);

export const Button = styled.button(
  ({ theme }) => `
  color: #fff;
  background-color: ${theme.themeColors.color};
  outline: none;
  border: none;
  padding: 1.5rem 7.8rem;
  border-radius: 3.5rem;
  cursor: pointer;
  h4 {
    font-size: 1.4rem;
    font-weight: 700;
  }
  svg {
    display: none;
  }
`
);

export const Links = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: currentColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const Nav = styled.nav`
  padding: 1rem;
  height: 100vh;
  position: fixed;
  border-right: 1px solid rgba(204, 204, 204, 0.2);
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Img = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
`;

export const P = styled.p`
  font-size: 1.8rem;
  margin-left: 2.5rem;
`;

export const Btn = styled.button`
  outline: none;
  background: none;
  border: none;
  font-weight: 900;
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.colors.textPrimary};
  &:hover {
    color: ${({ theme }) => theme.themeColors.color};
  }
`;
