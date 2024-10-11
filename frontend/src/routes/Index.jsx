import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/login/Login";
import Signup from "../components/signup/SignUp";
import ClassCategory from "../pages/ClassCategory";
import TrainerList from "../components/trainer/TrainerList";
import Profile from "../pages/Profile";
import AdminPanel from "../../admin/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "class-category", element: <ClassCategory /> },
      { path: "trainer-list", element: <TrainerList /> },
      { path: "profile", element: <Profile /> },
      {
        path: "admin-panel",
        element: <AdminPanel />,
      },
    ],
  },
]);

export default router;
