const KEY = 'api_key=9b0c2f9965f33f91e75ff619d689bb58';
let paramsQ = null;
let paramsP = null;
async function fetchMovies(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch {
    console.log('error');
  }
}

export function getTrandingMovie(page) {
  paramsQ = null;
  paramsP = null;
  return fetchMovies(
    `https://api.themoviedb.org/3/trending/movie/week?${KEY}&page=${page}`,
  );
}
export function getQueryMovie(query, page = 1) {
  paramsQ = query;
  paramsP = page;
  return fetchMovies(
    `https://api.themoviedb.org/3/search/movie?${KEY}&language=en-US&page=1&include_adult=true&query=${query}&page=${page}`,
  );
}

export function getParams() {
  return { paramsQ, paramsP };
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
