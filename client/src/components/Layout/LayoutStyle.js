import styled from "styled-components";
import { Grid } from "@mui/material";

export const Div = styled.div`
  display: flex;
`;

export const Grid2 = styled(Grid)`
  @media (max-width: 1024px) {
    display: none;
  }
`;
