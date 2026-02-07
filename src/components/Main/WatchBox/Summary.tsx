// components
import { Details } from '../../shared/Details';
// types
import type { WatchedMovieProps } from '../../../models/MovieProps';

const average = (arr: number[]) =>
  arr.reduce((acc: number, cur: number, i: number, arr: number[]) => acc + cur / arr.length, 0);

export function Summary({ watchedMovies }: { watchedMovies: WatchedMovieProps[] }) {
  const avgRuntime = average(watchedMovies.map((movie) => movie.runtime));
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating));
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <Details icon="#️⃣" text={watchedMovies.length} />

        <Details icon="⭐️" text={avgImdbRating} />

        <Details icon="🌟" text={avgUserRating} />

        <Details icon="⏳" text={avgRuntime} />
      </div>
    </div>
  );
}
