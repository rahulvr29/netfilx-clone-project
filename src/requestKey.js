const key ='838fedcb9c14b26fce7cc5e7198f3688'

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export const movieGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en` ;

export const movieShows = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`

export const tvShows = `https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`


export default requests;