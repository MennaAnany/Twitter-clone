import React from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Signup from "./pages/authentication/signup/signup";
import Signin from "./pages/authentication/Login/Login";
import Home from "./pages/Home/Home";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
import Container from "@mui/material/Container";
import styled from "styled-components";
import Layout from "./components/Layout/Layout";

const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

const router = createBrowserRouter([
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
  // {
  //   path: "/signin",
  //   element: <Signin />,
  // },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
    ],
  },
]);

const Router = () => (
  <Div>
    <Container fixed>
      <RouterProvider router={router} />
    </Container>
  </Div>
);

export default Router;
