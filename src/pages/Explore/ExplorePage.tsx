import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useExplore } from './hooks';
import { InputSearch } from '@/components';
import { HeroContent, SearchResult } from './components';

export const ExplorePage = () => {
    const { plantResponse, setSearch } = useExplore();
    const { query } = useParams<{ query: string }>();

    useEffect(() => {
        if (query) {
            setSearch(query);
        }
    }, [query, setSearch]);

    return (
        <main className="flex flex-col gap-12 items-center px-24 py-12 md:px-18">
            {/* HEADER */}
            <HeroContent />

            {/* SEARCH */}
            <div className="w-1/4">
                <InputSearch onSearch={setSearch} initialValue={query} />
            </div>

            {/* PLANT LIST */}
            {!!plantResponse?.data.length && <SearchResult plants={plantResponse.data} />}
        </main>
    );
};
