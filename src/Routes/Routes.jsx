import {
  createBrowserRouter,
} from "react-router";
import Slider from "../components/Slider/Slider";
import PlantTable from "../components/PlantTable/PlantTable";
import AddNewPlantForm from "../Pages/AddNewPlantForm/AddNewPlantForm";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Slider,
    children:[
        {
            path: "/table",
            Component: PlantTable
        },
        {
            path: '/addnewplant',
            Component: AddNewPlantForm
        }
    ]
  },
]);