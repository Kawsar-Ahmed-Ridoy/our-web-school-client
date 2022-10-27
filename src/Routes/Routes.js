import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import Item from "../Pages/Courses/Items/Item";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage"

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path:"/courses",
                element: <Courses></Courses>,
                loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/courses/:id',
                element:<Courses></Courses>,
                loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path:'/item',
                element: <Item></Item>
            }
        ]
    }
])