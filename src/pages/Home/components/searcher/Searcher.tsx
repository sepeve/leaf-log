import { Typography } from '@mui/material';
import { InputSearch } from '@/components/input-search/InputSearch';

interface SearcherProps {
    onSearch: (value: string) => void;
}

export const Searcher = ({ onSearch }: SearcherProps) => {

    return (
        <div className="flex flex-col gap-2 w-3/4 mx-auto -mt-4 border border-surface-muted rounded-2xl p-8 bg-surface">
            <Typography component="span" className="ml-10 text-secondary">
                Find your next plant
            </Typography>
            <InputSearch onSearch={onSearch} />
        </div>
    );
};
