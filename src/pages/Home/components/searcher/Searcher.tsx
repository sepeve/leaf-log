import { Button, Typography } from '@mui/material'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '../../../../components';

interface SearcherProps {
    onSearch: (value: string) => void
}

export const Searcher = ({ onSearch }: SearcherProps) => {
    const [searchValue, setSearchValue] = useState<string>("");
    
    return (
        <div className="flex flex-col gap-2 w-3/4 mx-auto -mt-8 border border-surface-muted rounded-2xl p-8 bg-surface">
            <Typography
                component="span"                
                className="ml-10 text-secondary"
            >
                Find your next plant
            </Typography>
            <div className="flex gap-2 items-center">                
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
            </div>
        </div>
    )
}