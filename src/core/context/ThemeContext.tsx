import { CssBaseline, type PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
    createContext,
    useEffect,
    useMemo,
    useState,
    type FC,
    type ReactNode,
} from 'react';
import { botanicalJournalTheme } from '../../theme';

type ThemeModeContextValue = {
    mode: PaletteMode;
    toggleTheme: () => void;
};

const STORAGE_KEY = 'leaf-log-theme-mode';
const getInitialMode = (): PaletteMode => {
    if (typeof window === 'undefined') return 'light';

    try {
        const savedMode = localStorage.getItem(STORAGE_KEY);
        if (savedMode === 'light' || savedMode === 'dark') {
            return savedMode;
        }
    } catch {
        // No local storage configured
    }

    const match = '(prefers-color-scheme: dark)';
    return window.matchMedia(match) ? 'dark' : 'light';
};

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);
const ThemeModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<PaletteMode>(getInitialMode);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', mode === 'dark');

        try {
            localStorage.setItem(STORAGE_KEY, mode);
        } catch {
            // No local storage configured
        }
    }, [mode]);

    const value = useMemo<ThemeModeContextValue>(
        () => ({
            mode,
            toggleTheme: () => {
                setMode((current) => (current === 'light' ? 'dark' : 'light'));
            },
        }),
        [mode],
    );

    return (
        <ThemeModeContext.Provider value={value}>
            <ThemeProvider theme={botanicalJournalTheme}>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};


export {
    // eslint-disable-next-line react-refresh/only-export-components
    ThemeModeContext,
    ThemeModeProvider
}