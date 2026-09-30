import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeMode } from '../../core/context/ThemeContext';

export const ThemeSelector = () => {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <IconButton aria-label="Toggle theme" onClick={() => toggleTheme()}>
            { mode === 'light' ? <DarkModeIcon sx={{ color: "primary.main" }} /> : <LightModeIcon /> }
        </IconButton>
    )
}