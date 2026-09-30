import { Button } from '@mui/material'
import type { MenuItem } from '../../core/model'

interface NavProps {
    menu: MenuItem[],
    menuItemClicked:  (path: string) => void,
}

export const Nav = ({ menu, menuItemClicked }: NavProps) => {
    return (
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
    )
}