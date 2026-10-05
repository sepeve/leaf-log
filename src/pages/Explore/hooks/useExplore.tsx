import axios from 'axios';
import { useState, useEffect } from 'react';
import z from 'zod';
import type { PlantsResponse } from '../../../core/model';
import { getPlants } from '../../../core/services/plant.service';
import { useLoader } from '@/core/hooks/useLoader';
import { useError } from '@/core/hooks';

export const useExplore = () => {
    const { showLoader, hideLoader } = useLoader();
    const { setError } = useError();
    const [plantResponse, setPlantResponse] = useState<PlantsResponse | null>(null);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const loadPlants = async (controller: AbortController) => {
            try {
                showLoader();
                setPlantResponse(null);

                const plants = await getPlants(search, controller.signal);

                if (!controller.signal.aborted) {
                    setPlantResponse(plants);
                }
            } catch (error: unknown) {
                // TODO: sacar toastr
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
                hideLoader();
            }
        };
        
        if(search.length) {
            const controller = new AbortController();
            void loadPlants(controller);
            return () => controller.abort();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);


    return {
        plantResponse,
        setSearch,
    }
}