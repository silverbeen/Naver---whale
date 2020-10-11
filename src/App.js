import { render } from '@testing-library/react';
import React from 'react';
//import Mainimg from './images/main.png';
import Search from './Component/Search';
import './App.css';
import Clock from './Component/Clock';
import Footer from './Component/Footer';

function App(){


  render()
    return(
      <>
        <div className="main">
          <Search/>
          <Clock/>
        </div>
        <Footer/>
      </>
    );
}

export default App;