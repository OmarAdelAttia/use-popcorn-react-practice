import { useState } from 'react';
// components
import { MovieList } from './MovieList';
import { ToggleButton } from '../../shared/ToggleButton';
// types
import type { MovieProps } from '../../../models/MovieProps';

export function ListBox({ moviesList }: { moviesList: MovieProps[] }) {
  const [isMovieListOpen, setIsMovieListOpen] = useState<boolean>(true);

  const toggleMoviesList = () => {
    setIsMovieListOpen((open) => !open);
  };

  return (
    <div className="box">
      <ToggleButton isOpen={isMovieListOpen} toggleOpen={toggleMoviesList} />

      {isMovieListOpen && <MovieList movies={moviesList} />}
    </div>
  );
}
