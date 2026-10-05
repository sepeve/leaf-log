import { Outlet } from 'react-router-dom';
import { useSettings } from '@/core/hooks';
import { Header } from './header';

export function Layout() {
    const { menu } = useSettings();

    return (
        <div className="bg-background min-h-screen">
            <Header menu={menu} />
            <Outlet />
        </div>
    );
}
