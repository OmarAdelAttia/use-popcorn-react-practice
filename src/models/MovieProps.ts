export interface MovieProps {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface WatchedMovieProps extends MovieProps {
  runtime: number;
  imdbRating: number;
  userRating: number;
}
