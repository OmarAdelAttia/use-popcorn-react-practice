// components
import { Details } from '../../shared/Details';
// types
import type { MovieProps } from '../../../models/MovieProps';

export function Movie({ movie }: { movie: MovieProps }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <Details icon="🗓" text={movie.Year} />
      </div>
    </li>
  );
}
