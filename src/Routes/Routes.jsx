import { createBrowserRouter } from "react-router";

import PlantTable from "../components/PlantTable/PlantTable";
import AddNewPlantForm from "../Pages/AddNewPlantForm/AddNewPlantForm";
import HomeLayout from "../AllLayouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ExploreGardeners from "../Pages/ExploreGardeners/ExploreGardeners";
import PlantDetailCard from "../components/PlantDetailCard/PlantDetailCard";
import GardenerDetailsCard from "../Pages/ExploreGardeners/GardenerDetailsCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
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
        element: <GardenerDetailsCard />,
      },
      {
        path: "/browsetips",
        Component: PlantTable,
      },
      {
        path: "/sharetip",
        Component: AddNewPlantForm,
      },
      {
        path: "/mytips",
        Component: PlantDetailCard,
      },
    ],
  },
]);
