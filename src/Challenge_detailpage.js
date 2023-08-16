import React from 'react'

const Challenge_detailpage = () => {
  return (
    <>
      
         <div className="main ">
      <div className="form-group has-search">
         <input type="text" className="form-control" placeholder="Movie Details" />
      </div>
    </div>
   
    <div class="card m-3" style={{maxwidth: 50 + 'rem'}}>
  <div class="row g-0">
    <div class="col-md-2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQj2a2GXhjvXPM7LWxRgZqZhGyNskBtndLg&usqp=CAU" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-10">
      <div class="card-body">
        <h5 class="card-title">Movie title</h5> 
        <p>Year | Length | Director</p>
        <p>Cast: Actor1, Actor 2, ...</p>

        <p class="card-text"> Desccription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
       </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Challenge_detailpage
