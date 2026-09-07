import './Movie.css';
import type { MovieType } from '../types/type';
const Movie = ({ movie }: { movie: MovieType }) => {
  return (
    <article id = {movie.id.toString()}>
        <h3>Film címe: {movie.title}</h3>
        <p>{movie.year} * {movie.genre}</p>
        <p>Értékelése: {movie.rating}</p>
        <p>{movie.description}</p>
    </article>
  )
}

export default Movie