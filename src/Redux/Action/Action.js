import MovieService from "../Service.js/MovieService";

export const MOVIES = "MOVIES";
export const MOVIE_DETAILS = "MOVIE_DETAILS";
export const LOAD_MORE_MOVIES="LOAD_MORE_MOVIES";
export const SEARCH_MOVIE="SEARCH_MOVIE";

 
export const movie_list = (pageNumber) => async (dispatch) => {
  try {
    const res = await MovieService.getAll(pageNumber);
  //  console.log(res.data.total_pages);
    
    dispatch({
      type: MOVIES,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }


};

export const loadMoreMovies = (pageNumber) => async (dispatch) => {
  try {
    const res = await MovieService.getAll(pageNumber);  
    dispatch({
      type: LOAD_MORE_MOVIES,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const movie_details = (id) => async (dispatch) => {
  try {
    const res = await MovieService.get(id);
    console.log(res);
    dispatch({
      type: MOVIE_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchMovie = (keyword,pageNumber) => async (dispatch) => {
  try {
    const res = await MovieService.search(keyword,pageNumber);
    console.log(res);
    dispatch({
      type: SEARCH_MOVIE,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};
