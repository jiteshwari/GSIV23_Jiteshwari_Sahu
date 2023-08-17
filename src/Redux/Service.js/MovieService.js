import httpCommon from "./http-common";

 
const getAll = (pageNumber) => {
  return httpCommon.get(`/movie/now_playing?api_key=02deaee63ee8ccb2432c818f541f44b4&page=${pageNumber}`);
};

const get = movie_id => {
  console.log(movie_id)
  return httpCommon.get(`/movie/${movie_id}?api_key=02deaee63ee8ccb2432c818f541f44b4`);
};

const search = (keyword,pageNumber) => {
  console.log(keyword)
  return httpCommon.get(`/search/movie?query=${keyword}&api_key=02deaee63ee8ccb2432c818f541f44b4&page=${pageNumber}`);
};
  
const MovieService = {
  getAll,
  get, 
  search,
};

export default MovieService;