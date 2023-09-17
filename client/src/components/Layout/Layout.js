import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Trends from "../../components/Trends/Trends";
import Suggested from "../../components/Suggested/Suggested";
import { Grid } from "@mui/material";
import React from "react";
import { BorderRight, BorderLeft } from "../../pages/Home/HomeStyle";
import { Div, Grid2 } from "./LayoutStyle";

const Layout = () => {
  return (
    <>
      <Div>
        <Grid>
          <Sidebar />
        </Grid>
        <BorderLeft />
        <Outlet />
        <BorderRight />
        <Grid2>
          <Searchbar />
          <Trends />
          <Suggested />
        </Grid2>
      </Div>
    </>
  );
};

export default Layout;
