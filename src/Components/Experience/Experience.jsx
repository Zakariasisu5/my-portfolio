import React from 'react'
import './Experience.css'
import { TiHtml5 } from "react-icons/ti";
import { PiFileCssBold } from "react-icons/pi";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";


const Experiance = () => {
  return (
    <section id='experience'>
    <h5>The Skills i have</h5>
    <h2>Experience</h2>
   <div className="container experience__container">
   <div className="experience__frontend">
    <h3>Frontend Devolopment</h3>
    <div className="experience__content">
       <article className='experience__details'>
         <TiHtml5 className='icons'/>
         <div>
           <h4>HTMl</h4>
         <small className='text-light'>Exprienced</small>
          </div>
       </article>
       <article className='experience__details'>
         <PiFileCssBold className='icons'/>
          <div>
         <h4>CSS</h4>
         <small className='text-light'>Intermediate</small>
          </div>
       </article>
       <article className='experience__details'>
         <SiJavascript className='icons'/>
         <div>
         <h4>Javascript </h4>
         <small className='text-light'>Exprienced</small>
          </div><br></br>
       </article>
       <article className='experience__details'>
         < FaBootstrap className='icons'/>
         <div>
         <h4>Bootstrap</h4>
         <small className='text-light'>Exprienced</small>
          </div>
       </article>
       <article className='experience__details'>
         <FaReact className='icons'/>
         <div>
         <h4>React js</h4>
         <small className='text-light'>Exprienced</small>
          </div>
       </article>
    </div>

   </div>
   <div className="experience__backend">
     <h3>Backend devolopment</h3>
     <div className="experience__content">
       <article className='experience__details'>
         <FaNode className='icons'/>
         <div>
         <h4>Node js</h4>
         <small className='text-light'>Exprienced</small>
          </div>
       </article>
       <article className='experience__details'>
         <DiMongodb className='icons'/>
         <div>
         <h4>MongoDB</h4>
         <small className='text-light'>Intermediate</small>
          </div>
       </article>
       <article className='experience__details'>
         <SiPhp className='icons'/>
         <div>
         <h4>PHP</h4>
         <small className='text-light'>Exprienced</small>
          </div>
       </article>
       <article className='experience__details'>
         <SiMysql className='icons'/>
         <div>
         <h4>MySQL</h4>
         <small className='text-light'>Exprienced</small>
          </div>
       </article>
       <article className='experience__details'>
         <FaPython className='icons'/>
         <div>
         <h4>Python</h4>
         <small className='text-light'>Exprienced</small>
          </div>
       </article>
      
    </div>
   </div>
    </div>
    </section>
  )
}

export default Experiance