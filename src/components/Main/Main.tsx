import { ListBox } from './ListBox/ListBox';
import { WatchBox } from './WatchBox/WatchBox';

import type { MovieProps } from '../../models/MovieProps';

export function Main({ moviesList }: { moviesList: MovieProps[] }) {
  return (
    <main className="main">
      <ListBox moviesList={moviesList} />

      <WatchBox />
    </main>
  );
}
