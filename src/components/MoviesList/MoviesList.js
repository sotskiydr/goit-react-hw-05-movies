import { NavLink } from 'react-router-dom';

export default function MoviesList({ dataMovies }) {
  return dataMovies.map(movie => {
    return (
      <li key={movie.id}>
        <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
      </li>
    );
  });
}
