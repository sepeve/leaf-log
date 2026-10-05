import { useCallback } from 'react';
import { HeroSection, Searcher } from './components';
import { Journal } from './components/journal/Journal';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const navigate = useNavigate();
    const handleSearch = useCallback(
        (value: string) => {
            const url = `/explore/${encodeURIComponent(value)}`;
            void navigate(url);
        },
        [navigate],
    );

    return (
        <>
            <HeroSection />
            <Searcher onSearch={handleSearch} />
            <Journal />
        </>
    );
}
