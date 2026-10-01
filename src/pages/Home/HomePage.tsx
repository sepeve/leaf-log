import { useCallback } from 'react';
import { HeroSection, Searcher } from './components';

export function HomePage() {
    
    const handleSearch = useCallback((value: string) => {
        const search = (value: string) => {
            console.log(value);
        }
        search(value);        
    }, []);

    return (
        <>
            <HeroSection />
            <Searcher onSearch={handleSearch}/>
        </>
    )
}