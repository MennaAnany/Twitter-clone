import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsStars } from "react-icons/bs";

export const Icon = styled(BsStars)`
  font-size: 3rem;
  color: ${({ theme }) => theme.themeColors.color};
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

export const Links = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
`;
export const Border = styled.p`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
`;
export const BorderRight = styled.p`
  border-right: 1px solid rgba(204, 204, 204, 0.2);
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const P = styled.p(
  ({ theme }) => `
  color: ${theme.colors.textPrimary};
  font-family: "Roboto";
  font-weight: 900;     
`
);
