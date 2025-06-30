import React from 'react'
import './Service.css'
import { FaFigma } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiCodementor } from "react-icons/si";

const Service = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Service</h2>

      <div className='container service__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaFigma/>
              <p>Website Redesign Service: Offer to redesign 
                existing websites, focusing on improving user 
                experience, accessibility, and visual appeal.
              </p>
            </li>
            <li>
              <FaFigma/>
              <p>Dashboard Design Service: Create user-friendly 
                and informative dashboards for web applications, 
                focusing on data visualization, layout, and interaction
                design.
              </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdOutlineWeb/>
              <p>Front-end development (client-side):
                Building user interfaces and experiences
                using HTML, CSS, JavaScript, and frameworks 
                like React or Angular.
              </p>
            </li>
            <li>
              <MdOutlineWeb/>
              <p>Back-end development (server-side):
                Creating server-side logic, database 
                integration, and API connectivity using 
                languages like Python, Ruby, PHP, or Node.js.
              </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Mentorship</h3>
          </div>
          <ul className='service__list'>
            <li>
              <SiCodementor/>
              <p>Project Guidance: Guide junior developers 
                through real-world projects, offering advice on
                project structure, design patterns, and 
                implementation strategies.
              </p>
            </li>
            <li>
              <SiCodementor/>
              <p>Skill Development Workshops:
                Organize workshops or one-on-one sessions 
                to teach specific skills, such as coding 
                languages, frameworks, or tools, and help 
                them stay up-to-date with industry trends.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service