import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Features from "../Features/Features";
import FAQ from "../FAQ/FAQ";
import About from "../About/About";
import LandingPage from "../LandingPage/LandingPage";
import Dashboard from "../Dashboard/Dashboard";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "/dashboard",
		element: <Dashboard/>
    },
])