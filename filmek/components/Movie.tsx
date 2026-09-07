import type { MovieType } from '../types/type';

// 1. Definiáljuk az interfészt, ami elfogadja a 'movie'-t ÉS a 'fav' függvényt is
interface MovieProps {
    movie: MovieType; // (vagy MovieCompType, ha azt használod)
    fav: (id: number) => void; // 👈 Ez hiányzott a Movie fájlból!
}

// 2. Átvesszük mindkét propot a komponensben
const Movie = ({ movie, fav }: MovieProps) => {
    return (
        <div className="movie-card">
            <div className="movie-rating">★ {movie.rating.toFixed(1)}</div>
            <div className="movie-content">
                <h2 className="movie-title">{movie.title}</h2>
                <div className="movie-meta">
                    <span className="movie-genre">{movie.genre}</span>
                    <span className="movie-year">{movie.year}</span>
                </div>
                <p className="movie-description">{movie.description}</p>
                {/* Kattintáskor átadjuk a film ID-ját a MovieList-nek */}
                <button className="fav-button" onClick={() => fav(movie.id)}>
                    🤍 Kedvencekhez ad
                </button>
            </div>
        </div>
    );
};

export default Movie;
