import React from "react";
import { Link, NavLink } from "react-router-dom";

const Cards = ({movie}) => {
  return (
    <>
    <div className="card m-2" style={{ width: 17 + "rem" }}>
    <NavLink to = '/detailpage' >    <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQj2a2GXhjvXPM7LWxRgZqZhGyNskBtndLg&usqp=CAU"}
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
        <p className="m-2">Description:{movie.overview} </p>
      </div>
  

    </>
  );
};

export default Cards;
