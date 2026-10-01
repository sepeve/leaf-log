import { SettingsProvider } from './core/context/SettingsContext';
import { RouterProvider } from 'react-router-dom';
import { ROUTES } from './router';

export default function App() {
    return (
        <SettingsProvider>
            <RouterProvider router={ROUTES} />
        </SettingsProvider>
    );
}
