import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import Profile from '../../assets/profile1.jpg';
import HeaderScrol from './HeaderScrol.jsx';

const Header = () => {
  return (
    <section>
    <div>
      <header>
    <div className='container header-container'>
      <h5>Hello i'm</h5>
      <h1>Zakaria Sisu</h1>
      <h5 className='text-light'>Full Stack Software Devoloper</h5>
      <CTA/>
      <HeaderScrol/>

      <div className='profile'>
      <img src={Profile} alt='profile'/>

      <a href='#contact' className='Scroll-down'> Scroll Down</a>
      </div>
      
    </div>
    </header>
    </div>
    </section>
  )
}

export default Header