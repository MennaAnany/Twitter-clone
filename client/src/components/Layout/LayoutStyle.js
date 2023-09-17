import styled from "styled-components";
import { Grid } from "@mui/material";

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Grid2 = styled(Grid)`
  @media (max-width: 1024px) {
    display: none;
  }
`;
