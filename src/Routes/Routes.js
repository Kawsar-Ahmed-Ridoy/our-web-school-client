import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import Item from "../Pages/Courses/Items/Item";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage"
import PremiumCourses from "../Pages/Category/PremiumCourses/PremiumCourses";
import Login from "../PrivateRoute/Login/Login";
import Register from "../PrivateRoute/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute/PrivateRoute";
import Blogs from "../Blogs/Blogs";
import FAQ from "../FAQ/FAQ";

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
            },
            {
                path:"/premium-course",
                element: <PrivateRoute><PremiumCourses></PremiumCourses></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            }
        ]
    }
])