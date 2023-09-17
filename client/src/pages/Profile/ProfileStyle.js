import styled from "styled-components";
import { Grid } from "@mui/material";

export const H4 = styled.span(
  (props) => `
  color: ${
    props.subheader
      ? props.theme.colors.textSecondry
      : props.theme.colors.textPrimary
  };


  font-size: ${props.subheader ? "1.5rem" : "2rem"};
  font-weight: ${props.subheader ? "" : "700"};
  margin-top: 0.4rem;
  display:flex;
  flex-direction:column;

`
);

export const Gridd = styled(Grid)`
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;
export const Header = styled.span`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Button = styled.span`
  display: flex;
  padding: 0.8rem;
  font-size: 2.2rem;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.themeColors.hover};
    border-radius: 10rem;
  }
  svg {
    color: ${({ theme }) => theme.themeColors.color};
    font-size: 2.3rem;
  }
`;
