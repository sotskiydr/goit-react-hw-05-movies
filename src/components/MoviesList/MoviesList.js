import { NavLink } from 'react-router-dom';
import styles from './MoviesList.module.scss';

export default function MoviesList({ dataMovies }) {
  return dataMovies.map(movie => {
    return (
      <li key={movie.id} className={styles.item}>
        <NavLink to={`/movies/${movie.id}`} className={styles.link}>
          {movie.poster_path ? (
            <img
              className={styles.img}
              src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
              alt={movie.id}
              width="300"
            ></img>
          ) : (
            <img
              className={styles.img}
              src="/noSignal.jpg"
              alt={movie.id}
              width="300"
            ></img>
          )}
          <p className={styles.title}>{movie.title}</p>
        </NavLink>
      </li>
    );
  });
}
