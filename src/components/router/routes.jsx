import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },

    {
        path: "/SignIn",
        element: <SignIn/>
    },

    {
        path: "/SignUp",
        element: <SignUp/>
    },

])