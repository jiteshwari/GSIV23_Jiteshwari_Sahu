import React, { useState } from "react";
import './Searchbar.css'
 
const Searchbar = ({searchhandler}) => {

  const [keyword,setKeyword]=useState();

  const searchHandler=(e)=>{
    setKeyword(e.target.value);
    searchhandler(keyword);
  }

  return (
    <div>
        <div className="main ">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" onChange={searchHandler}/>
      </div>
    </div>

    
    
   
    </div>
  );
};

export default Searchbar;
