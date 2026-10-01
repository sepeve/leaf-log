import { useEffect, useState } from 'react';
import axios from 'axios';
import z from 'zod';
import { TextField } from '@mui/material';
import type { Plant, PlantsResponse } from '../../core/model';
import { getPlants } from '../../core/services/plant.service';

export function ExplorePage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [plantResponse, setPlantResponse] = useState<PlantsResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const controller = new AbortController();

        const loadPlants = async (controller: AbortController) => {
            try {
                setLoading(true);
                setError(null);
                setPlantResponse(null);

                const plants = await getPlants(search, controller.signal);

                if (!controller.signal.aborted) {
                    setPlantResponse(plants);
                }
            } catch (error: unknown) {
                if (error instanceof z.ZodError) {
                    const details = error.issues.map((issue) => issue.message).join('; ');
                    setError(`Invalid response: ${details}`);
                } else if (axios.isAxiosError(error)) {
                    setError(`API error: ${error.message}`);
                } else {
                    setError(
                        `Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}`,
                    );
                }
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            if (search.length) {
                void loadPlants(controller);
            } else {
                setPlantResponse(null);
            }
        }, 500);

        return () => {
            controller.abort();
            clearTimeout(timeoutId);
        };
    }, [search]);

    return (
        <div className="flex flex-col mx-auto gap-3 w-1/2">
            <h1>PLANT LIST</h1>
            <TextField
                id="plant-search"
                aria-label="Plant search"
                label="Plant search"
                variant="standard"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            {loading && <p>Loading...</p>}
            {error && <p role="alert">{error}</p>}
            {plantResponse && (
                <ul>
                    {plantResponse.data.map((plant: Plant) => (
                        <li key={plant.id} className="flex gap-2">
                            <span>{plant.scientific_name}</span>
                            <span>-</span>
                            <span>{plant.common_name}</span>
                        </li>
                    ))}
                    {!plantResponse.data.length && <li>No elements found</li>}
                </ul>
            )}
        </div>
    );
}
