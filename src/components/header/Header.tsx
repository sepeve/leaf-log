import {
  AppBar,
  Toolbar,
} from '@mui/material';
import type { MenuItem } from '../../core/model';
import { ThemeSelector } from '../theme-selector/ThemeSelector';
import { Logo } from '../logo/Logo';
import { Nav } from '../nav/Nav';

type HeaderProps = {
    menu: MenuItem[],
    menuItemClicked:  (path: string) => void,
}

export function Header({ menu, menuItemClicked }: HeaderProps) {
  return (
    <AppBar position="sticky">
      <Toolbar className="gap-4">
        <Logo />
        <Nav menu={menu} menuItemClicked={menuItemClicked} />
        <ThemeSelector />
      </Toolbar>
    </AppBar>
  );
}