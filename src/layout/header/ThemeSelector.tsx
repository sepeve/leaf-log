import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeMode } from '@/core/hooks';

export const ThemeSelector = () => {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <IconButton
            aria-label="Toggle theme"
            className="text-primary"
            onClick={() => toggleTheme()}
        >
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
};
