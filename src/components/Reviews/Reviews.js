import { useState, useEffect } from 'react';
import * as api from '../../api/api-service';

export default function Reviews(id) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    api.getReviewsMovie(id).then(data => console.log(data));
  }, [id]);

  return <h1> rew</h1>;
}
