// components
import { Movie } from './Movie';
// types
import type { MovieProps } from '../../../models/MovieProps';

export function MovieList({ movies }: { movies: MovieProps[] }) {
  return (
    <ul className="list">
      {movies?.map((movie: MovieProps) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
}
