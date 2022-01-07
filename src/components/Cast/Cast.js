import { useState, useEffect } from 'react';
import * as api from '../../api/api-service';
import styles from './Cast.module.scss';

export default function Cast({ id }) {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    api.getCreditsMovie(id).then(data => setAuthors(data.cast));
  }, [id]);

  return (
    authors && (
      <ul className={styles.list}>
        {authors.map(author => {
          return (
            <li className={styles.item} key={author.cast_id}>
              {author.profile_path ? (
                <img
                  className={styles.img}
                  src={`https://www.themoviedb.org/t/p/w500${author.profile_path}`}
                  alt={author.name}
                ></img>
              ) : (
                <img
                  src="/noPhoto.jpg"
                  className={styles.img}
                  alt={author.name}
                ></img>
              )}
              <h3 className={styles.title}>{author.name}</h3>
              <p className={styles.description}>{author.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}
