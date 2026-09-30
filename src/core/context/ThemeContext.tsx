import { CssBaseline, type PaletteMode } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createContext, useContext, useEffect, useMemo, useState, type FC, type ReactNode } from 'react'
import { botanicalJournalThemes } from '../../theme';

type ThemeModeContextValue = {
    mode: PaletteMode,
    toggleTheme: () => void
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);
const STORAGE_KEY = "leaf-log-theme-mode";

const getInitialMode = (): PaletteMode => {

    if(typeof window === 'undefined') return 'light';

    try {
        const savedMode = localStorage.getItem(STORAGE_KEY);
        if (savedMode === 'light' || savedMode === 'dark') {
            return savedMode;
        }
    } catch {
        // No local storage configured
    }

    const match = '(prefers-color-scheme: dark)';
    return window.matchMedia(match) ? 'dark': 'light';

}

export const ThemeModeProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [mode, setMode] = useState<PaletteMode>(getInitialMode);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, mode);
        } catch {
            // No local storage configured
        }
    }, [mode]);

    const value = useMemo<ThemeModeContextValue>(() => ({
        mode,
        toggleTheme: () => {
            setMode((current) => (current === 'light' ? 'dark': 'light'))
        }
    }), [mode])

    return(
        <ThemeModeContext.Provider value={value}>
            <ThemeProvider theme={botanicalJournalThemes[mode]}>
                <CssBaseline enableColorScheme />   
                { children }
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )
} 

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);
    if(!context) {
        throw new Error("useThemeMode must be used within a ThemeModeProvider");
    }

    return context;
}