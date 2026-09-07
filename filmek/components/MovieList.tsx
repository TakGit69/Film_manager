import './MovieList.css';
import type { MovieType } from '../types/type';
import { useEffect, useState, useMemo, useRef } from 'react';
import { getMovies } from '../src/service/app';
import Movie from './Movie'; 

const MovieList = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [search, setSearch] = useState<string>('');
    const [favoritesCount, setFavoritesCount] = useState<number>(0); 
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        const fetchMovies = async () => {
            const Ogmovies = await getMovies();
            setMovies(Ogmovies);
        };
        fetchMovies();
        inputRef.current?.focus(); 
    }, []);

    const searchableMovies = useMemo(() => {
        if(!search) return movies;
        return movies.filter(movie => 
            movie.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, movies]); 

    return (
        <>
        <header>
            <h1>Filmek listája</h1>
            <input 
                type="search" 
                name="search" 
                placeholder="Keresés..." 
                ref={inputRef}
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
            />
            <h3>Kedvencek száma: {favoritesCount}</h3>
        </header>
        

        <main>
            {searchableMovies.length > 0 && searchableMovies.map((m, i) => (
                <Movie key={m.id} movie={m}  />
            ))}
        </main>
        </>
    );
};

export default MovieList;
