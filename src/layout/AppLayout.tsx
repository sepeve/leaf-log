
import { Header } from '../components';
import { useSettings } from '../core/context/SettingsContext';
import { Outlet, useNavigate } from "react-router-dom";

export function Layout() {
    const { menu } = useSettings();
    const navigate = useNavigate();

    const onMenuItemClicked = (path: string): void => {
        navigate(path);
    }

    return (
        <div className='flex flex-col min-h-screen min-w-screen gap-8'>
            <Header menu={menu} menuItemClicked={onMenuItemClicked} />
            <Outlet />
        </div>
    )
}