import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Features from "../Features/Features";
import FAQ from "../FAQ/FAQ";
import About from "../About/About";
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