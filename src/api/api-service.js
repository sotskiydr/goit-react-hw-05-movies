const KEY = 'api_key=9b0c2f9965f33f91e75ff619d689bb58';
let q = null;
async function fetchMovies(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch {
    console.log('error');
  }
}

export function getTrandingMovie() {
  q = null;
  return fetchMovies(`https://api.themoviedb.org/3/trending/movie/week?${KEY}`);
}
export function getQueryMovie(query) {
  q = query;
  return fetchMovies(
    `https://api.themoviedb.org/3/search/movie?${KEY}&language=en-US&page=1&include_adult=true&query=${query}`,
  );
}

export function getQuery() {
  return q;
}

export function getDetailsMovie(id) {
  return fetchMovies(
    `https://api.themoviedb.org/3/movie/${id}?${KEY}&language=en-US`,
  );
}
export function getCreditsMovie(id) {
  return fetchMovies(
    `https://api.themoviedb.org/3/movie/${id}/credits?${KEY}&language=en-US`,
  );
}
export function getReviewsMovie(id) {
  return fetchMovies(
    `https://api.themoviedb.org/3/movie/${id}/reviews?${KEY}&language=en-US`,
  );
}
