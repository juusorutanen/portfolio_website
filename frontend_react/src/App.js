import React, { useEffect, useState } from 'react';

import { About, Footer, Header, Work} from './container';
import { Navbar } from './components';

import './App.scss';
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";




const App = () => {

const { darkMode } = useContext(DarkModeContext);


  return (
  <div className={`theme-${darkMode ? "light" : "dark"}`}>

    <div className='app'>   
        
        <Navbar />
        <Header />
        <Work />
        <Footer />
    </div>
  </div>
  )
}

export default App;