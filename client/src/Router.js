import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./pages/authentication/signup/signup";
import Signin from "./pages/authentication/Login/Login";
import Home from "./pages/Home/Home";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
import Container from "@mui/material/Container";
import styled from "styled-components";
import Layout from "./components/Layout/Layout";
import DisplayModal from "./components/DisplayModal/DisplayModal";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
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
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/notifications",
        element: (
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        ),
      },
      {
        path: "users/:username",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/display",
        element: (
          <ProtectedRoute>
            <DisplayModal />
          </ProtectedRoute>
        ),
      },
      {
        path: "/",
        element: <Signin />,
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
