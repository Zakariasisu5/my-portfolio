import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderScrol = () => {
  return (
    <div className='header__socials'>
    <a href='https//linkdin.com' target='_blank'><FaLinkedin /></a>
        <a href='https//github.com' target='_blank'><FaGithub /></a>
        <a href='https//facebook.com' target='_blank'><FaFacebook /></a>
        
    </div>
  )
}

export default HeaderScrol