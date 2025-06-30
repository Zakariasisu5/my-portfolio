import { useState } from 'react'
import './App.css'

import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Nav from './Components/NavBar/Nav.jsx'
import Testmonial from './Components/Testmonials/Testmonial.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Contacts from './Components/Contacts/Contact.jsx'
import Service from './Components/Service/Service.jsx'


const  App = () =>{

  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>
    <Testmonial/>
    <Contacts/>
    <Footer/>
    
    
        
    </>
  )
}

export default App
