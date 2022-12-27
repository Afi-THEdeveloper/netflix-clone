

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import {originals,action} from './urls'
import Banner from "./components/banner/Banner";
import RowPost from "./components/Rowpost/RowPost";

function App() {

return (
  <div className="app">
  <NavBar/>
  <Banner/>
  <RowPost url={originals} title='Netflix originals'/>
  <RowPost url={action} title='Action' isSmall />
  </div>
  

  )
}

export default App;
