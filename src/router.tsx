import { createBrowserRouter } from "react-router-dom";
import { Layout } from './layout/Layout';
import { ExplorePage, HomePage } from './pages';

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
                path: "explore",
                element: <ExplorePage />,
            },
        ],
    }
]);
