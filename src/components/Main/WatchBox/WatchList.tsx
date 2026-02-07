import type { WatchedMovieProps } from '../../../models/MovieProps';
import { WatchedMovie } from './WatchedMovie';

export function WatchedList({ watchedMovies }: { watchedMovies: WatchedMovieProps[] }) {
  return (
    <ul className="list">
      {watchedMovies.map((movie) => (
        <WatchedMovie movie={movie} />
      ))}
    </ul>
  );
}
