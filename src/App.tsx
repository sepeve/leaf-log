import { RouterProvider } from 'react-router-dom';
import { ROUTES } from './router';
import { SettingsProvider } from '@/core/context/SettingsContext';
import { ErrorProvider, LoaderProvider } from '@/core/context';

export default function App() {
    return (
        <SettingsProvider>
            <LoaderProvider>
                <ErrorProvider>
                    <RouterProvider router={ROUTES} />
                </ErrorProvider>
            </LoaderProvider>
        </SettingsProvider>
    );
}
