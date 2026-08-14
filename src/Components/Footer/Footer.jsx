import React from 'react'
import './footer1.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="footer__eyebrow">Independent product engineer</span>
          <a href="#" className="footer__logo">Zakaria Sisu<span>.</span></a>
          <p>Building thoughtful digital products with clarity, craft, and purpose.</p>
          <a className="footer__cta" href="mailto:zakaria.sisu@example.com">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="site-footer__connect">
          <p className="site-footer__label">Connect</p>
          <div className="footer__socials" aria-label="Social links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Zakariasisu5" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Zakaria Sisu. All rights reserved.</small>
        <a href="#">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
