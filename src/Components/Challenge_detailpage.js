import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movie_details } from '../Redux/Action/Action';


const Challenge_detailpage = () => {

const movieId = useParams() ;
console.log(movieId.id)
  const dispatch = useDispatch();
  const selector= useSelector((state) => state.MovieReducer);

  
   
  console.log(selector)

  useEffect(() => {
    dispatch(movie_details(movieId.id))
  },[dispatch])

  return (
    <>
      
         <div className="main ">
          
      <div className="form-group has-search">
         <input type="text" className="form-control" placeholder="Movie Details" />
      </div>
    </div>
   { selector && 
    <div class="card m-3" style={{maxwidth: 50 + 'rem'}}>
  <div class="row g-0">
    <div class="col-md-2">
      <img  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${selector.poster_path}`} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-10">
      <div class="card-body">
        <h5 class="card-title">{selector.title}</h5> 
        <p>{selector.release_date} | {selector.runtime} minutes</p>
    
        <p class="card-text">  {selector.overview} </p>
       </div>
    </div>
  </div>
</div>}

    </>
  )
}

export default Challenge_detailpage
