
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
        <>
            <Header menu={menu} menuItemClicked={onMenuItemClicked} />
            <Outlet />
        </>
    )
}