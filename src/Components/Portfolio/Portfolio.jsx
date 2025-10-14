import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'
import Img7 from '../../assets/portfolio7.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src= {Img7} alt='meetmate'/>
             </div>
            <h3>MeetMate</h3>
            <small>MeetMate – An AI-powered networking platform that helps users connect, 
              schedule meetings, chat, and manage profiles, 
              with insights and support powered by Sensay AI.".</small>
            <div className="portfolio__item-cta">
            <a href='https://github.com/Zakariasisu5/MeetMate' className='btn' target='_blank'>Github Repo</a>
            <a href='https://meetmate-zeta.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src= {Img2} alt='dashboard'/>
             </div>
            <h3>FlockSmart</h3>
            <small>FlockSmart is an innovative,
            AI-driven poultry management solution and 
            data-driven decision-making tools.</small>
            <div className="portfolio__item-cta">
            <a href='https://github.com/Zakariasisu5/FlockSmart' className='btn' target='_blank'>Github Repo</a>
            <a href='https://flocksmart.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src= {Img3} alt='dashboard'/>
             </div>
            <h3>Eco Companion</h3>
            <small>Practical advice on how to reduce your environmental impact through energy conservation, waste reduction, and
               eco-friendly practices at home and work.</small>
            <div className="portfolio__item-cta">
            <a href='https://github.com/Zakariasisu5/eco-companion' className='btn' target='_blank'>Github Repo</a>
            <a href='https://green-living-companion.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src= {Img4} alt='dashboard'/>
             </div>
            <h3>UDS GPA Calculator</h3>
            <small>The UDS GPA Calculator is a sleek and efficient web application designed to help University for Development Studies
              (UDS) students accurately compute and track their GPA</small>
            <div className="portfolio__item-cta">
            <a href='https://github.com/Zakariasisu5/uds-gpa-calculator' className='btn' target='_blank'>Github Repo</a>
            <a href='https://uds-gpa-calculator.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src= {Img5} alt='dashboard'/>
             </div>
            <h3>Web3Thrive</h3>
            <small>a cutting-edge freelance platform tailored for Africa-based freelancers, combining Web3 technologies 
              and AI to empower professionals of all skill levels.</small>
            <div className="portfolio__item-cta">
            <a href='https://github.com/Zakariasisu5/web3thriveai' className='btn' target='_blank'>Github Repo</a>
            <a href='https://web3thriveai.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src= {Img6} alt='dashboard'/>
             </div>
            <h3>MicroFarmly</h3>
            <small>MicroFarmly is an AI-powered, hyperlocal farming and food subscription platform.
              It enables cafes, coworking spaces, </small>
            <div className="portfolio__item-cta">
            <a href='https://github.com/Zakariasisu5/microfarmly-grow-together' className='btn' target='_blank'>Github Repo</a>
            <a href='https://microfarmly-grow-together.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>
        
            
      </div>
    </section>
  )
}

export default Portfolio