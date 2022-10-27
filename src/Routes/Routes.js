import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import Item from "../Pages/Courses/Items/Item";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
                path:'/item',
                element: <Item></Item>
            }
        ]
    }
])