import type {MovieType} from '../types/type';
import axios from 'axios';

/* export async function getMovies(): Promise<MovieType[]> {
    try{
        const response = await axios.get('../public/movies.json');
        return response.data as MovieType[];
    } catch (error) {
            throw new Error('Hiba történt a filmek lekérésekor');
        }
        return await response.json() as MovieType[];
    } catch (error) {
        console.error('Hiba történt a filmek lekérésekor:', error);
        return [];
    }
} */

const app = axios.create({
    baseURL: '/',
    timeout: 3000,
});

export async function getMovies(){
    const res = await app.get('../public/movies.json');
    return res.data
}