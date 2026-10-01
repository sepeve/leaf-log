import { Link } from 'react-router-dom';
import type { MenuItem } from '../../core/model';
import { ThemeSelector } from './ThemeSelector';

interface NavProps {
    menu: MenuItem[];
}

export const Nav = ({ menu }: NavProps) => {
    return (
        <nav className="flex items-center gap-4">
            {menu.map(({ label, href }) => (
                <Link to={href} className="text-foreground transition-colors hover:text-primary">
                    {label}
                </Link>
            ))}
            <ThemeSelector />
        </nav>
    );
};
