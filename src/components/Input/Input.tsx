import { InputBase, Paper } from '@mui/material';
import type { ReactNode } from 'react';

interface InputProps {
    icon?: ReactNode;
    placeholder?: string;
    value: string;
    extraClasses?: string;
    onValueChange: (value: string) => void;
}

export const Input = ({ icon, placeholder, value, extraClasses, onValueChange }: InputProps) => {
    return (
        <Paper component="form" className="flex flex-1 items-center gap-2 border border-secondary">
            {icon && (
                <span aria-hidden="true" className="ml-2 flex shrink-0 items-center text-secondary">
                    {icon}
                </span>
            )}
            <InputBase
                className={`flex-1 py-2 ${extraClasses}`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                inputProps={{ 'aria-label': placeholder }}
            />
        </Paper>
    );
};
