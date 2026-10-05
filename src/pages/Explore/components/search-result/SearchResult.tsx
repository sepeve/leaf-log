import type { Plant } from '@/core/model';

interface SearchResultProps {
    plants: Plant[];
}

export const SearchResult = ({ plants }: SearchResultProps) => {
    return (
        <ul>
            {plants.map((plant: Plant) => (
                <li key={plant.id} className="flex gap-2 text-foreground">
                    <span>{plant.scientific_name}</span>
                    <span>-</span>
                    <span>{plant.common_name}</span>
                </li>
            ))}
        </ul>
    );
};
