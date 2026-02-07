import { useState } from 'react';
// data
import { tempWatchedData } from '../../../models/Data';
// components
import { Summary } from './Summary';
import { WatchedList } from './WatchList';
import { ToggleButton } from '../../shared/ToggleButton';
// types
import type { WatchedMovieProps } from '../../../models/MovieProps';

export function WatchBox() {
  const [isWatchListOpen, setIsWatchListOpen] = useState<boolean>(true);

  const [watched, setWatched] = useState<WatchedMovieProps[]>(tempWatchedData);

  const toggleWatchList = () => {
    setIsWatchListOpen((open) => !open);
  };

  return (
    <div className="box">
      <ToggleButton isOpen={isWatchListOpen} toggleOpen={toggleWatchList} />

      {isWatchListOpen && (
        <>
          <Summary watchedMovies={watched} />

          <WatchedList watchedMovies={watched} />
        </>
      )}
    </div>
  );
}
