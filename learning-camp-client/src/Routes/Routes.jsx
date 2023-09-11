import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Error from "../pages/Error/Error";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import EnrollClass from "../pages/Dashboard/EnrollClass/EnrollClass";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructor',
                element: <AllInstructors></AllInstructors>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            // Students Routes
            {
                path: "mycart",
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: "enrollclass",
                element: <EnrollClass></EnrollClass>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            // Instructor Routes
            {
                path: "addclass",
                element: <AddClass></AddClass>
            },
            {
                path: "instructorclass",
                element: <MyClass></MyClass>
            },
            //Admin Route
            {
                path: "manageclass",
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path: "allusers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);