import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
       <a href='#' className='footer__logo'></a>
       <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
         <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
           <li><a href='#services'>Service</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
             <li><a href='#testmonial'>Testmonial</a></li>
              <li><a href='#contact'>Contact</a></li>
       </ul>
       <div className='footer__socials'>
        <a href='https//linkdin.com' target='_blank'><FaLinkedin /></a>
        <a href='https//github.com' target='_blank'><FaGithub /></a>
        <a href='https//facebook.com' target='_blank'><FaFacebook /></a>    
       </div>
       <div className="footer__copyright">
        <small>&copy; Zakaria Sisu. All rights reserved.</small>
       </div>
      </footer>
  )
}

export default Footer