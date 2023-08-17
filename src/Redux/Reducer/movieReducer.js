import { MOVIES, MOVIE_DETAILS ,LOAD_MORE_MOVIES} from "../Action/Action"; 
  
const initialState = {
  movies: []
};
  
  function MovieReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case MOVIES:
        return {...state, movies:payload };

        case 'LOAD_MORE_MOVIES':
          return {...state,movies:payload};
      

         case MOVIE_DETAILS:
        return payload;

        case 'SEARCH_MOVIE':
        return {...state,movies:payload};
  
     
    
      
      default:
        return state;
    }
  };
  
  export default MovieReducer;