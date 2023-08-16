import React, { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";
import Searchbar from "./Searchbar";
import { HiHome } from "react-icons/hi";
import Cards from "./Cards";

const Challenge_listpage = () => {
    const [movies, setMovies] = useState([]);

    useEffect (() => {
        const fetchData= async() => {
            // https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1

        const  response  =  await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=02deaee63ee8ccb2432c818f541f44b4'  ,
        {
            method:"GET",
          
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
             },
        })
        const data = await response.json()
        // console.log(data)
        setMovies(data.results)
        console.log(movies)
    }
    fetchData() 
    }, [])
   


  return (
    <>
      <div>
        <Searchbar />
        <HiHome />


        <div className="d-flex flex-wrap">
          {movies.map((movie) => <Cards  movie={movie} /> )}
         </div>
      </div>
    </>
  );
};

export default Challenge_listpage;
