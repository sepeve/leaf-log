import { ThemeModeContext } from '@/core/context';
import { useContext } from 'react';

export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);
    if (!context) {
        throw new Error('useThemeMode must be used within a ThemeModeProvider');
    }

    return context;
};
