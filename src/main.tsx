import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App.tsx';
import './index.css';
import { ThemeModeProvider } from './core/context/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StyledEngineProvider enableCssLayer>
            <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
            <ThemeModeProvider>
                <CssBaseline />
                <App />
            </ThemeModeProvider>
        </StyledEngineProvider>
    </StrictMode>,
);
