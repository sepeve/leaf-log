import { Loader } from '@/components/loader/Loader';
import { createContext, useState, type FC, type ReactNode } from 'react';

type Loader = {
    showLoader: () => void;
    hideLoader: () => void;
};

type LoaderContextProvider = {
    children: ReactNode;
};

const LoaderContext = createContext<Loader | undefined>(undefined);
const LoaderProvider: FC<LoaderContextProvider> = ({ children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const contextValue: Loader = {
        showLoader: () => {
            setIsVisible(true);
        },
        hideLoader: () => {
            setIsVisible(false);
        },
    };

    return (
        <LoaderContext.Provider value={contextValue}>
            {isVisible && <Loader />}
            {children}
        </LoaderContext.Provider>
    );
};

export {
    // eslint-disable-next-line react-refresh/only-export-components
    LoaderContext,
    LoaderProvider,
};
