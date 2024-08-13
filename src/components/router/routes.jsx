import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/Home",
        element: <Home/>
    }
])