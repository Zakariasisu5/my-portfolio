import React from 'react'
import './About.css'
import Profile from '../../assets/me.png';

import { GiSkills } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";
import { GrProjects } from "react-icons/gr";


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
       
        <div className="about__me-image">
          <img src={Profile} alt='profile-image'/>
          </div>
          <div className="about__me">
          <div className="about__cards">
          <article className=' about_card'>
             <GiSkills className='about-icon'/>
             <h5>Experiance</h5>
             <small>3+ Years of  working</small>
             </article>

             <article className='about_card'>
             <MdWorkHistory className='about-icon'/>
             <h5>Clients</h5>
             <small>200+</small>
             </article>

             <article className='about_card'>
             <GrProjects className='about-icon'/>
             <h5>Projects</h5>
             <small>80+ completed</small>
             </article>
             </div>
        <div className="about__content">
        <p>Hi I'm Zakaria Sisu with 4 years extensive experience in 
          the full stack development industry, I have cultivated a 
          diverse skill set and a deep understanding of various 
          programming languages, frameworks, and methodologies. 
          Includes Python, JavaScript, React, typescript , Vue, 
          Django, FastAPI, and 
          Flask, etc which allow me to build versatile and robust software solutions.</p>
       </div>
        <a href='#contact' className='btn btn-primary'>Let's Talt</a>
        </div>
        </div>
    </section>
    
  )
}

export default About