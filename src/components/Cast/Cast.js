import { useState, useEffect } from 'react';
import * as api from '../../api/api-service';

export default function Cast({ id }) {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    api.getCreditsMovie(id).then(data => setAuthors(data.cast));
  }, [id]);

  return (
    authors && (
      <ul>
        {authors.map(author => {
          return (
            <li key={author.cast_id}>
              {author.profile_path ? (
                <img
                  src={`https://www.themoviedb.org/t/p/w500${author.profile_path}`}
                  alt={author.name}
                  width="200"
                ></img>
              ) : (
                <img src="/noPhoto.jpg" alt={author.name} width="200"></img>
              )}
              <h3>{author.name}</h3>
              <p>{author.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}
