import { createContext, type FC, type ReactNode } from 'react';
import type { Settings } from '@/core/model';
import { getSettings } from '@/core/services';

type SettingsContextProvider = {
    children: ReactNode;
};

const SettingsContext = createContext<Settings | undefined>(undefined);
const SettingsProvider: FC<SettingsContextProvider> = ({ children }) => {
    const settings: Settings = getSettings();
    return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
};

export {
    // eslint-disable-next-line react-refresh/only-export-components
    SettingsContext,
    SettingsProvider,
};
