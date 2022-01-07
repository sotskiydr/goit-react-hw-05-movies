import { useState, useEffect } from 'react';
import * as api from '../../api/api-service';
import styles from './Reviews.module.scss';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    api.getReviewsMovie(id).then(data => setReviews(data.results));
  }, [id]);

  return reviews !== null && reviews.length > 0 ? (
    <ul className={styles.list}>
      {reviews.map(review => {
        const avatar = review.author_details.avatar_path;

        return (
          <li className={styles.item} key={review.id}>
            <div className={styles.user}>
              {avatar && avatar.includes('http') ? (
                <img
                  className={styles.img}
                  src={avatar.slice(1, avatar.length)}
                  alt={review.author}
                  width={50}
                ></img>
              ) : (
                <img
                  className={styles.img}
                  src="/noPhoto.jpg"
                  alt={review.author}
                  width={50}
                ></img>
              )}
              <h3 className={styles.title}>{review.author}</h3>
            </div>
            <p className={styles.description}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <h2>We don't have any reviews for this movie :(</h2>
  );
}
