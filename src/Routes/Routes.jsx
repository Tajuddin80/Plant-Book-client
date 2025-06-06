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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/recenttips"),
        element: <Home />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "exploregardeners",
        loader: () => fetch("http://localhost:3000/gardeners"),
        element: <ExploreGardeners />,
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
      },
      {
        path: "browsetips",
        loader: () => fetch("http://localhost:3000/alltips"),
        element: <PlantTable />,
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
      },
      {
        path: "sharetip",
        element: (
          <PrivateRoute>
            <AddNewPlantForm />
          </PrivateRoute>
        ),
      },
      {
        path: "mytips",
        element: (
          <PrivateRoute>
             <AddNewPlantForm />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
