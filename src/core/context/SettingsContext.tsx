import { createContext, useContext, type FC, type ReactNode } from 'react';
import type { Settings } from '../model';
import { getSettings } from '../services/menu.service';

const SettingsContext = createContext<Settings | undefined>(undefined);
const settings = getSettings();

export const SettingsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }

    return context;
};
