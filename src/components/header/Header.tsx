import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import type { MenuItem } from '../../core/model';

type HeaderProps = {
    menu: MenuItem[],
    menuItemClicked:  (path: string) => void,
}

export function Header({ menu, menuItemClicked }: HeaderProps) {
  return (
    <AppBar position="sticky">
      <Toolbar className="gap-4">
        <Typography
            component="a"
            onClick={() => menuItemClicked("/")}
            variant="h6"
            className="flex-1 font-bold cursor-pointer"
            sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          Leaf Log
        </Typography>

        <nav aria-label="Principal Navigation" className="flex">
          {menu.map(({ label, href }) => (
            <Button
              key={href}
              component="a"
              color="inherit"
              onClick={() => menuItemClicked(href)}
            >
              {label}
            </Button>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
}