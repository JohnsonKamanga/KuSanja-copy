import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },
])