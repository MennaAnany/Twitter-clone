import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Trends from "../../components/Trends/Trends";
import Suggested from "../../components/Suggested/Suggested";
import styled from "styled-components";
import React from "react";
import { Grid } from "@mui/material";
import { BorderRight } from "../../pages/Home/HomeStyle";

// const Main = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

const Div = styled.div`
  display: flex;
`;

const Layout = () => {
  return (
    <>
      <Div>
        <Grid container>
          <Grid>
            <Sidebar />
          </Grid>
        </Grid>
        <Outlet />
        <BorderRight />
        <Grid>
          <Searchbar />
          <Trends />
          <Suggested />
        </Grid>
      </Div>
    </>
  );
};

export default Layout;
