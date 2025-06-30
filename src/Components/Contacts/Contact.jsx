import React from 'react'
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className="contact__options">
        <article className='contact__option'>
           <MdEmail className='contact__icon'/>
          <h4>Email</h4>
          <h5>zakariasisu5@gmail.com</h5>
          <a href='mailto:zakariasisu5@gmail.com' target='_blank'>Send message</a>
        </article>
        <article className='contact__option'>
           <FaFacebookMessenger className='contact__icon'/>
          <h4>Facebook</h4>
          <h5>Zakaria Sisu</h5>
          <a href='https://www.facebook.com/zakaria.sisu.568' target='_blank'>Send message</a>
        </article>
        <article className='contact__option'>
           <FaWhatsapp className='contact__icon'/>
          <h4>WhatsApp</h4>
          <h5>+123456789</h5>
          <a href='https://api.whatsapp.com/send?phone+233555212491' target='_blank'>Send message</a>
        </article>
      </div>
      <form action=''>
        <input type="text" name='name'  placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email ' required />
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <a href='mailto:zakariasisu5@gmail.com'>
        <button className=' btn btn-primary'>Send</button></a>
      </form>
    </div>
    </section>
  )
}

export default Contact