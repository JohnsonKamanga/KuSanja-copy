import { RouterProvider } from "react-router-dom";
import { routes } from "./components/router/routes";

function App(){

  return(
    <RouterProvider router={routes}>

    </RouterProvider>
  )
}

export default App;