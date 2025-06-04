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
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/recenttips"),
        Component: Home,
      },
      {
        path: "/signin",
        Component: Signin,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/exploregardeners",
        loader: () => fetch("http://localhost:3000/gardeners"),
        Component: ExploreGardeners,
      },
      {
        path: "/gardeners/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/gardeners/${params.id}`),
        Component: GardenerDetailsCard,
      },
      {
        path: "/browsetips",
        loader: () => fetch("http://localhost:3000/alltips"),
        Component: PlantTable,
      },
      {
        path: "/plantdetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plantdetails/${params.id}`),
        Component: PlantDetailCard,
      },
      {
        path: "/sharetip",
        Component: () => (
          <PrivateRoute>
            <AddNewPlantForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/mytips",
        Component: () => (
          <PrivateRoute>
            <PlantDetailCard></PlantDetailCard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
