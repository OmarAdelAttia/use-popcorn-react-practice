// components
import { Details } from '../../shared/Details';
// types
import type { WatchedMovieProps } from '../../../models/MovieProps';

export function WatchedMovie({ movie }: { movie: WatchedMovieProps }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <Details icon="⭐️" text={movie.imdbRating} />

        <Details icon="🌟" text={movie.userRating} />

        <Details icon="⏳" text={movie.runtime} />
      </div>
    </li>
  );
}
