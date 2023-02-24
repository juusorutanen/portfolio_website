import React, { useEffect, useState } from 'react';

import { About, Footer, Header, Projects} from './container';
import { Navbar } from './components';

import './App.scss';

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";




const App = () => {

const { darkMode } = useContext(DarkModeContext);


  return (
  <div className={`theme-${darkMode ? "dark" : "light"}`}>

    <div className='app'>   
        
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Footer />
    </div>
  </div>
  )
}

export default App;