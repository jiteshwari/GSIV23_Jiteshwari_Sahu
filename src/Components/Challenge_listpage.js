import React, { useEffect, useState } from "react";
import  { useDispatch, useSelector,connect } from "react-redux";

import { FaSearch } from "react-icons/fa";
import Searchbar from "./Searchbar";
import { HiHome } from "react-icons/hi";
import Cards from "./Cards";
 import { loadMoreMovies, movie_list, searchMovie} from './../Redux/Action/Action';

import { selectProducts ,selectPage} from './Selector';


const Challenge_listpage = () => {

  const [currentpage,setCurrentPage]=useState(1);
  const [currentMovies,SetCurrentMovies]=useState([]);



  const dispatch = useDispatch();

 
  const selectorMovie = useSelector((state) => state.MovieReducer.movies);
 // console.log(selectorMovie)

  
  

  const loadmore=()=>{
    setCurrentPage(currentpage+1);
    dispatch(loadMoreMovies(currentpage));
  }
 
  useEffect(() => {
    dispatch(movie_list(1));
  },[dispatch]);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
  //     selectorMovie.length
  //   ) {
  //     loadMoreMovies(page + 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [page]);


  const searchhandler=(keyword)=>{
    setCurrentPage(1);
    console.log(keyword);
    dispatch(searchMovie(keyword,currentpage));
  }

 
  return (
    <>
      <div>
        <Searchbar searchhandler={searchhandler}/>
        <HiHome />

        <div className="d-flex flex-wrap">
          {selectorMovie && <>
            
            <Cards movies={selectorMovie} />
            <button className="btn-primary text-center m-2 mb-5" style={{width:100+"%"}} onClick={loadmore}>LoadMore...</button>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Challenge_listpage;




