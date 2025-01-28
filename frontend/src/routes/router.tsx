import HomePage from "@/pages/home";
import MainLayout from "@/components/layouts/layout.main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import CategoriesPage from "@/pages/categories";
import Formlogin from "@/pages/login";
import MsproductFeature from "@/features/msproduct";
import MsboxFeature from "@/features/msbox";
import CalculationProductAndBoxFeature from "@/features/calculationproductbox";
import Commingsoon from "@/components/layouts/navbars/comingsoon";

const router = createBrowserRouter([
    {
        index: true,
        element: <Formlogin />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/msproduct",
                element: <MsproductFeature />,
            },
            {
                path: "/msbox",
                element: <MsboxFeature />,
            },
            {
                path: "/calculationproductbox",
                element: <CalculationProductAndBoxFeature />,
            },
            {
                path: "/commingsoon",
                element: <Commingsoon />,
            },
        ],
    },
    // {
    //     path: "/categories",
    //     element: <CategoriesPage />,
    // },

])


export default function Router() {
    return <RouterProvider router={router} />;
}