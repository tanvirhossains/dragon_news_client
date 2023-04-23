import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Catagories from "../pages/Category/Catagories";
import Category from "./Category";
import CategoryNewses from "../pages/Home/CategoryNewses";
import Model from "../LoginRegister/Model";
import NewsDetailInfo from "../pages/News/NewsDetail/NewsDetailInfo";
import NewsDetail from "../pages/News/NewsDetail/NewsDetail";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader: fetch("http://localhost:5000/news"),
                loader: async ({ params }) => {
                    return fetch("http://localhost:5000/news");
                },
            },
            {
                path: "/news/:id",
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`);
                },
                element: <CategoryNewses />,
            },
            {
                path: "/#login",
                element: <Model />

            },
            {
                path: "/#login",
                element: <Model />

            },
            {
                path: "/:categoryName/:id/:title",
                element: <NewsDetail />,
                loader: async ({ request, params }) => {
                    return fetch(`http://localhost:5000/${params.categoryName}/${params.id}/${params.title}`)


                }
            }


        ],
    },
]);
