const KEY = 'api_key=9b0c2f9965f33f91e75ff619d689bb58';

async function fetchMovies(url) {
  const response = fetch(url);
  return (await response).json();
  // ? await response.json()
  // : Promise.reject(new Error('not found'));
}

export function getTrandingMovie() {
  return fetchMovies(`https://api.themoviedb.org/3/trending/movie/week?${KEY}`);
}
export function getQueryMovie(query) {
  return fetchMovies(
    `https://api.themoviedb.org/3/search/movie?${KEY}&language=en-US&page=1&include_adult=true&query=${query}`,
  );
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

// export default class api {
//   async getTrandingMovie() {
//     const trandingData = ;
//     try {
//       const result = await fetch(trandingData);
//       const response = result.json();
//       return response;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// // Получаем фильм по значению
// async getQueryMovie(query) {
//   const queryData = `https://api.themoviedb.org/3/search/movie?${KEY}&language=en-US&page=1&include_adult=true&query=${query}`;
//   try {
//     const result = await fetch(queryData);
//     const response = result.json();
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }
// async getDetailsMovie(id) {
//   const queryData = `https://api.themoviedb.org/3/movie/${id}?${KEY}&language=en-US`;
//   try {
//     const result = await fetch(queryData);
//     const response = result.json();
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }

// async getCreditsMovie(id) {
//   const queryData = `https://api.themoviedb.org/3/movie/${id}/credits?${KEY}&language=en-US`;
//   try {
//     const result = await fetch(`${queryData}`);
//     const response = result.json();
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }

// async getReviewsMovie(id) {
//     const queryData = `https://api.themoviedb.org/3/movie/${id}/reviews?${KEY}&language=en-US`;
//     try {
//       const result = await fetch(`${queryData}`);
//       const response = result.json();
//       return response;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }
