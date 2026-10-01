
import { Header } from './header';
import { useSettings } from '../core/context/SettingsContext';
import { Outlet } from "react-router-dom";

export function Layout() {
    const { menu } = useSettings();

    return (
        <div className="bg-background min-h-screen">
            <Header menu={menu} />
            <Outlet />
        </div>
    )
}