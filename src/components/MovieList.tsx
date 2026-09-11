import './MovieList.css';
import type { MovieCompType } from '../types/type';
import { useEffect, useState, useMemo, useRef } from 'react';
import { getMovies } from '../service/app';
import Movie from './Movie'; 
import { useFavorites } from '../context/favoritesContext';

const MovieList = () => {
    const [movies, setMovies] = useState<MovieCompType[]>([]);
    const [search, setSearch] = useState<string>('');
    // A tömb most már a filmek címeit (string) fogja tárolni
    const {favorites, addFavorite} = useFavorites();
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

    function handleFav(title: string) {
        addFavorite(title);
    }

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
            <h3>Kedvencek száma: {favorites.length}</h3>
        </header>
        
        <main>
            {searchableMovies.length > 0 && searchableMovies.map((m) => (
                <Movie 
                    key={m.id} 
                    movie={m} 
                    /* 
                       2. Mivel a handleFav függvény most már 'string' típusú címet vár,
                       ezért egy névtelen függvénnyel () => handleFav(m.title) adjuk át neki.
                    */
                    fav={() => handleFav(m.title)} 
                />
            ))}
        </main>
        <footer></footer>
        </>
    );
};

export default MovieList;
