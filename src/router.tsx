import { createBrowserRouter } from "react-router-dom";
import { PlantListPage } from './pages/PlantList';
import { Layout } from './layout/AppLayout';
import { HomePage } from './pages/Home';

export const ROUTES = createBrowserRouter([    
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "plant-list",
                element: <PlantListPage />,
            },
        ],
    }
]);
