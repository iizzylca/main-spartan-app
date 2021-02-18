import React from 'react'
import './assets/css/App.css';
import { GlobalStyle } from './globalStyle';
import Footer from './components/Footer'
import {useState} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Routes from './routes/routes'


function App(){
  
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
      <>
      <Navbar toggle={toggle}/> 
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <GlobalStyle/>
        <Routes/>
        <Footer/>
      </>
    )
  
}

export default React.memo(App);