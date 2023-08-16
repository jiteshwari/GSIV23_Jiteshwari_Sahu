import React from "react";
import './Searchbar.css'
 
const Searchbar = () => {
  return (
    <div>
        <div className="main ">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" />
      </div>
    </div>
   
    </div>
  );
};

export default Searchbar;
