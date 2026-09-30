import type { ReactNode } from 'react'
import { Header } from '../components';
import { useSettings } from '../core/context/SettingsContext';

type LayoutProps = {
    children: ReactNode
}
export function Layout({ children }: LayoutProps) {

    const { menu } = useSettings();

    const onMenuItemClicked = (path: string): void => {
        console.log(path);
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <Header menu={menu} menuItemClicked={onMenuItemClicked} />

            <main className="content">{children}</main>
        </div>
    )
}