import { useCallback } from 'react';
import { HeroSection, Searcher } from './components';
import { Journal } from './components/journal/Journal';


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
            <Journal />
        </>
    )
}