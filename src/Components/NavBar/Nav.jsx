import React from 'react'
import react, {useState} from 'react';
import './Nav.css';
import { FaHome } from "react-icons/fa";
 import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrContact } from "react-icons/gr"
import { GrProjects } from "react-icons/gr";



const Nav = () => {
  const[active, setActive] = useState("#")
  
  function HanbleActive(){
    setActive(true)
  }
  
  return (
    <div className="nav-section">

    <nav>
       <a href='#' onClick={()=>setActive('#')} className={active === '#' ? "active" : ""} >
        <FaHome/></a>
       <a href='#about' onClick={()=>setActive('#about')} className={active === '#about' ? "active" : ""}>
        <FcAbout /></a>
       <a href='#experience' onClick={()=>setActive('#experiance')} className={active === '#experiance' ? "active" : ""}>
        <GiSkills /></a>
        <a href='#portfolio' onClick={()=>setActive('#portfolio')} className={active === '#services' ? "active" : ""}>
          <GrProjects /></a>
         <a href='#contact' onClick={()=>setActive('#contact')} className={active === '#contact' ? "active" : ""}>
          <GrContact /></a>
    </nav>
    </div>
  )
}

export default Nav