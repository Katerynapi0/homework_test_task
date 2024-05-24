import {createBrowserRouter} from "react-router-dom";
import React from "react";
import PrivateRoute from "../components/PrivateRoute.jsx";
import {Home} from "../pages/Home.jsx";
import {Login} from "../pages/Login.jsx";
import NoAuthRote from "../components/NoAuthRote.jsx";
import {Registration} from "../pages/Registration.jsx";
import RecoveryPassword from "../pages/RecoveryPassword.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute element={<Home />} />,
},
{
    path: "/login",
        element: <NoAuthRote element={<Login />} />
},
{
    path: "/register",
        element: <NoAuthRote element={<Registration />} />,
},
{
    path: "/email",
        element: <NoAuthRote element={<RecoveryPassword />} />,
},
]);