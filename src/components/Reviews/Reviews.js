import { useState, useEffect } from 'react';
import * as api from '../../api/api-service';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    api.getReviewsMovie(id).then(data => setReviews(data.results));
  }, [id]);

  return reviews !== null && reviews.length > 0 ? (
    <ul>
      {reviews.map(review => {
        const avatar = review.author_details.avatar_path;

        return (
          <li key={review.id}>
            {avatar && avatar.includes('http') ? (
              <img
                src={avatar.slice(1, avatar.length)}
                alt={review.author}
                width={50}
              ></img>
            ) : (
              <img
                src={`http://surl.li/barxa`}
                alt={review.author}
                width={50}
              ></img>
            )}
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <h2>We don't have any reviews for this movie :(</h2>
  );
}
