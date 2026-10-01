import { PlantsSchema, type PlantsResponse } from '../model';
import axios from 'axios';
import { z } from 'zod';

const API_BASE_URL = 'https://perenual.com/api/v2';

export async function getPlants(query: string, signal: AbortSignal): Promise<PlantsResponse> {
    try {
        const url = `${API_BASE_URL}/species-list`;
        const params = {
            key: import.meta.env.VITE_PERENUAL_API_KEY,
            page: 1,
            q: query.trim(),
        };
        const response = await axios.get<unknown>(url, { params, signal });
        return PlantsSchema.parse(response.data);
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            console.error('Invalid respose:', error.issues);
        } else if (axios.isAxiosError(error)) {
            console.error('API error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }

        throw error;
    }
}
