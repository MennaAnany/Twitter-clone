import styled from "styled-components";
import { Link } from "react-router-dom";

export const Li = styled.li(
  ({ theme }) => `
  color: ${theme.colors.textPrimary};
  list-style: none;
  padding: 0.8rem ; 
  border-radius: 3.5rem;
  margin-bottom: 1.2rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color:${theme.themeColors.hover};
    color: ${theme.themeColors.color};
  }

  &:last-child {
    background: none;
    list-style: none;
    @media (max-width: 1024px) {
      font-size: 4.5rem;
      padding: 1rem;
    }
    
  }
  &:first-child  {
    background: none;
    padding: 0.5rem 0.2rem;
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    @media (max-width: 1024px) {
      margin-left: 0.2rem;
    }
    
}
@media (max-width: 1024px) {
  padding: 0.3rem ;
}

`
);

export const Button = styled.button(
  ({ theme }) => `
  color: #fff;
  background-color: ${theme.themeColors.color};
  outline: none;
  border: none;
  padding: 1.5rem 7rem;
  border-radius: 3.5rem;
  cursor: pointer;
  transition: all 0.4s;
  h4 {
    font-size: 1.4rem;
    font-weight: 700;
  }
  svg {
    display: none;
  }
  
  @media (max-width: 1024px) {
    position: relative;
    left: -1rem;
    padding: 0.2rem;
    border-radius: 50%;

    h4 {
      display: none;
     
    }
    svg {
      display: block;
      padding: 1rem;

    }
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
  &:focus {
    color: ${({ theme }) => theme.themeColors.color};
  }
`;

export const Nav = styled.nav`
  padding: 0.5rem;
  height: 100vh;
  position: relative;
  margin-bottom: -100vh;
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
  @media (max-width: 1024px) {
    font-size: 4.5rem;
    padding: 0.2rem;
  }
`;

export const P = styled.p`
  font-size: 1.8rem;
  margin-left: 2.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Span = styled.p`
  font-size: 2.6rem;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
    padding: 0.2rem;
  }
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
  @media (max-width: 1024px) {
    font-size: 2.4rem;
    padding: 0.2rem;
  }
`;

export const Border = styled.div``;
