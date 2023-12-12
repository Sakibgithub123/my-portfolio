import {
    createBrowserRouter,
} from "react-router-dom";

import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Aboutus from "../pages/About/Aboutus";
import Contact from "../pages/Contact/Contact";
import MyWork from "../pages/MyWork/MyWork";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<Aboutus></Aboutus>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/mywork",
                element:<MyWork></MyWork>
            }
        ]
    },
]);

