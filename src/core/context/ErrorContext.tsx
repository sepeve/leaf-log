import { Alert, Snackbar } from '@mui/material';
import { createContext, useState, type FC, type ReactNode } from 'react';

type Error = {
    setError: (value: string) => void;
};

type ErrorContextProvider = {
    children: ReactNode;
};

const ErrorContext = createContext<Error | undefined>(undefined);
const ErrorProvider: FC<ErrorContextProvider> = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);
    const contextValue: Error = {
        setError: (value: string) => {
            setErrorMessage(value);
            setShowError(true);
        },
    };

    const handleClose = () => {
        setShowError(false);
    };

    return (
        <ErrorContext.Provider value={contextValue}>
            <Snackbar open={showError} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {errorMessage}
                </Alert>
            </Snackbar>
            {children}
        </ErrorContext.Provider>
    );
};

export {
    // eslint-disable-next-line react-refresh/only-export-components
    ErrorContext,
    ErrorProvider,
};
