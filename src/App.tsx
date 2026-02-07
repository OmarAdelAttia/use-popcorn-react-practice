import { useState } from 'react';
// components
import { NavBar } from './components/NavBar/NavBar';
import { Main } from './components/Main/Main';
// data
import { tempMovieData } from './models/Data';
// types
import type { MovieProps } from './models/MovieProps';

export default function App() {
  const [movies, setMovies] = useState<MovieProps[]>(tempMovieData);

  return (
    <>
      <NavBar movieNum={movies.length} />

      <Main moviesList={movies} />
    </>
  );
}
