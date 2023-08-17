import logo from "./logo.svg";
import "./App.css";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Challenge_listpage from "./Components/Challenge_listpage";
import Challenge_detailpage from "./Components/Challenge_detailpage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path= '/' element ={<Challenge_listpage />}></Route>
          <Route  exact path= '/detailpage/:id'  element = {<Challenge_detailpage />} ></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
