import { useState } from 'react';
import { Button, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@/components';

interface InputSearchProps {
    initialValue?: string;    
    onSearch: (value: string) => void;
}

export const InputSearch = ({ initialValue, onSearch }: InputSearchProps) => {
    const [searchValue, setSearchValue] = useState<string>(initialValue || '');
    return (  

        <Paper
            component="form"
            className="flex gap-2 border-none bg-transparent"
            onSubmit={(event) => {
                event.preventDefault();
                onSearch(searchValue);
            }}>
            <Input
                icon={<SearchIcon />}
                placeholder="Search plants, e.g. monstera"
                value={searchValue}
                onValueChange={setSearchValue}
            />

            <Button
                variant="contained"
                className="shrink-0 rounded-xl text-lg px-8 py-3 bg-forest-600 text-white hover:bg-forest-800"
                onClick={() => onSearch(searchValue)}
            >
                Search
            </Button>
        </Paper>
    );
}