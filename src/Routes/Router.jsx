import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BrowseTutions from "../BrowseTutions/BrowseTutions";
import DashboardLayout from "../layouts/DashboardLayout";
import MyTutions from "../DashBoard/MyTutions/MyTutions";
import CurrentTuitions from "../Current Tuitions/CurrentTuitions";
import ViewTutorApplications from "../DashBoard/ViewTutorApplications";
import TutionDetails from "../Pages/TutionDetails";
import BecomeTutor from "../BecomeTutor";
import StudentDashboard from "../DashBoard/Student-DashBoard/StudentDashboard";
import TutorDashboard from "../DashBoard/TutorDashboard/TutorDashboard";
import Unauthorized from "../Pages/Unauthorized";
import TutorRoute from "./TutorRoute";
import Tutor from "../Tutor/Tutor";

export const router = createBrowserRouter([
  {
    path: "/",
 Component:RootLayout,
 children:[
    {
        index:true,
        Component:Home
    },
 ]
  },
  {
path:'/',
Component:AuthLayout,
children:[
   {
path:'login',
Component:Login
   },
   {
    path:'register',
    Component:Register
   },
      { path: "unauthorized",
         element: <Unauthorized /> }
]
  },

  
{
  path: 'dashboard',
  element: (
    <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>
  ),
  children: [
    {
      path: 'my-tutions',
      element: <MyTutions />

    },
      {
   path:'browseTutions',
   element:<PrivateRoute><BrowseTutions></BrowseTutions></PrivateRoute>,
   // loader:()=> fetch('/public/Cities.json')
   // .then(res=>res.json()),
     loader: async () => {
    const citiesRes = await fetch('/public/Cities.json');
    const subjectsRes = await fetch('/public/Subjects.json');

    const cities = await citiesRes.json();
    const subjects = await subjectsRes.json();

    return { cities, subjects }; // make sure loaderData has this structure
  }

  },
    {
path: 'StudentDashboard',
element:<StudentDashboard>
  
</StudentDashboard>
    },

// {
// path:'TutorDashboard',
// element:<TutorDashboard></TutorDashboard>
// },

    {
path: 'tutor-applications/:tuitionId',
element:<ViewTutorApplications></ViewTutorApplications>
    },
   

  ]
},

{
  path: "tutor-dashboard",
  element: (
    <TutorRoute>
      <Tutor />
    </TutorRoute>
  )
},
  {
   path:'current-tutions',
   Component:CurrentTuitions
  },
  {
path:'tution/:tutionId',
element: <PrivateRoute><TutionDetails></TutionDetails></PrivateRoute>
  },
  {
  path: "/become-tutor",
  element: <PrivateRoute><BecomeTutor /></PrivateRoute>  
  }

]);