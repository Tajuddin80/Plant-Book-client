import { createBrowserRouter } from "react-router";
import PlantTable from "../components/PlantTable/PlantTable";
import AddNewPlantForm from "../Pages/AddNewPlantForm/AddNewPlantForm";
import HomeLayout from "../AllLayouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ExploreGardeners from "../Pages/ExploreGardeners/ExploreGardeners";
import PlantDetailCard from "../components/PlantDetailCard/PlantDetailCard";
import GardenerDetailsCard from "../Pages/ExploreGardeners/GardenerDetailsCard";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Error404 from "../components/Error404/Error404";
import MyTips from "../Pages/MyTips/MyTips";
import UpdateTip from "../Pages/MyTips/UpdateTip";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error404 />, 
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/recenttips"),
        element: <Home />,
        errorElement: <Error404 />,
      },
      {
        path: "signin",
        element: <Signin />,
        errorElement: <Error404 />,
      },
      {
        path: "signup",
        element: <Signup />,
        errorElement: <Error404 />,
      },
       {
        path: "aboutus",
        element: <AboutUs></AboutUs> ,
        errorElement: <Error404 />,
      },
      {
        path: "exploregardeners",
        loader: () => fetch("http://localhost:3000/gardeners"),
        element: <ExploreGardeners />,
        errorElement: <Error404 />,
      },
      {
        path: "gardeners/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/gardeners/${params.id}`),
        element: (
          <PrivateRoute>
            <GardenerDetailsCard />
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },
      {
        path: "browsetips",
        loader: () => fetch("http://localhost:3000/alltips"),
        element: <PlantTable />,
        errorElement: <Error404 />,
      },
      {
        path: "plantdetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plantdetails/${params.id}`),
        element: (
          <PrivateRoute>
            <PlantDetailCard />
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },
      {
        path: "sharetip",
        element: (
          <PrivateRoute>
            <AddNewPlantForm />
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },
      {
        path: "mytips/:email",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },
        {
        path: "updatetip/:id",
        element: (
          <PrivateRoute>
         <UpdateTip></UpdateTip>
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },



      
    ],
  },
  {
    path: "*",
    element: <Error404 />, // catch-all fallback for unknown routes
  },
]);
