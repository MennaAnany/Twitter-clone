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
import DisplayModal from "./components/DisplayModal/DisplayModal";
const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  min-height: 100vh;
`;

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
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
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/display",
        element: <DisplayModal />,
      },
    ],
  },
]);

const Containerr = styled(Container)`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

const Router = () => (
  <Div>
    <Containerr>
      <RouterProvider router={router} />
    </Containerr>
  </Div>
);

export default Router;
