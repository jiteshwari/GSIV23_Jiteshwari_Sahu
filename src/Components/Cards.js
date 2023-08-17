import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Cards = ({movies}) => {



  
  return (
    <>
    {movies?.map((movie)=>
    <div className="card m-2" style={{ width: 17 + "rem" }}>
    <NavLink to = {`/detailpage/${movie.id}` }>  
      <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          class="card-img-top"
          alt="..."
        />      </NavLink>
        <div className="card-body d-flex justify-content-between">
          <div>
            <h6 class="card-text">{movie.title}</h6>
          </div>
          <div>
            <p class="card-text"> Rating:{movie.vote_average}★ </p>
          </div>
        </div>
        <p className="m-2">Released : {movie.release_date} </p> 
      </div>)}
  

    </>
  );
};

export default Cards;
