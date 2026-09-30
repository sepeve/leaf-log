import { createBrowserRouter } from "react-router-dom";
import { ExplorePage } from './pages/Explore';
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
                path: "explore",
                element: <ExplorePage />,
            },
        ],
    }
]);
