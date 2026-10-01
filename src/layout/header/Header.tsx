import { AppBar, Toolbar } from '@mui/material';
import type { MenuItem } from '../../core/model';
import { Logo } from './Logo';
import { Nav } from './Nav';

type HeaderProps = {
    menu: MenuItem[];
};

export function Header({ menu }: HeaderProps) {
    return (
        <AppBar position="sticky">
            <Toolbar className="border-b border-border bg-background">
                <Logo />
                <Nav menu={menu} />
            </Toolbar>
        </AppBar>
    );
}
