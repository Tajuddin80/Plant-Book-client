import { createBrowserRouter } from "react-router";

import PlantTable from "../components/PlantTable/PlantTable";
import AddNewPlantForm from "../Pages/AddNewPlantForm/AddNewPlantForm";
import HomeLayout from "../AllLayouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/browsetips",
        Component: PlantTable
      },
      {
        path: "/sharetip",
        Component: 
            AddNewPlantForm 
      },
      {
        path: "/mytips",
        Component: AddNewPlantForm 
      },
    ]
  }
]);
