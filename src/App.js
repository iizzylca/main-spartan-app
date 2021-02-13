import React from 'react'
import './assets/css/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Main from './components/Main';
import { SliderData } from './components/Slider/SliderData';
import Footer from './components/Footer'
import Feature from './components/Feature';
import Location from './components/Location';
import { PhotoData } from './components/About/AboutElements';
import Collage from './components/Collage';
import AboutPage from './components/AboutPage';
import Slider from './components/Slider';
import About from './components/About';



function App(){
  
    return(
      <Router>
        <GlobalStyle/>
        <Main/>
        <About picture={PhotoData}/>
        <AboutPage/>
        <Collage/>
        <Feature/>
        <Slider slides={SliderData}/>
        <Location/>
        <Footer/>
      </Router>
    )
  
}

export default App;