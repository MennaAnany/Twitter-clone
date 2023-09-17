import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsStars } from "react-icons/bs";
import { Grid } from "@mui/material";

export const Gridd = styled(Grid)`
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Icon = styled(BsStars)`
  font-size: 3rem;
  color: ${({ theme }) => theme.themeColors.color};
  @media (max-width: 700px) {
    font-size: 2rem;
  }
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
`;

export const BorderLeft = styled.p`
  border-left: 1px solid rgba(204, 204, 204, 0.2);
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

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`
);
