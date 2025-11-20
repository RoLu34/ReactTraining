import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";

const Router = createBrowserRouter([
    { 
        path: "/", 
        element: <Dashboard/>, 
        children:[
            { index: true, element: <Home/> },
            { path: "/about", element: <About/> },
        ],
    }
]);

export default Router;