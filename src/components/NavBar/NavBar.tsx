import { Logo } from './Logo';
import { Search } from './Search';
import { NumResults } from './NumResults';

export function NavBar({ movieNum }: { movieNum?: number }) {
  return (
    <nav className="nav-bar">
      <Logo logo={'🍿'} title={'usePopcorn'} />

      <Search placeText={'Search movies...'} />

      <NumResults movieNum={movieNum} />
    </nav>
  );
}
