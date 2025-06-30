import React from 'react'
import './Testmonial.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import Avatar5 from '../../assets/me.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules'; 

import 'swiper/css/pagination';

const data = [
  {
  avatar : Avatar1,
  name : 'Alisa Bell',
  review : 'Working with Zakaria Sisu was a game-changer for our project. his expertise in both front-end and back-end development ensured a seamless and efficient process. The final product exceeded our expectations!',

  },
  {
  avatar : Avatar2,
  name : 'Alex Johnson',
  review : 'Zakaria Sisu is a true full-stack master! He delivered our complex web application on time, within budget, and with exceptional quality. His communication skills and problem-solving abilities made the entire process stress-free',

  },
  {
  avatar : Avatar3,
  name : 'John Doe',
  review : 'Zakaria Sisu is ability to bridge the gap between design and development was invaluable. He took our vision and turned it into a stunning, functional reality. We are thrilled with the results!',

  },
  {
  avatar : Avatar4,
  name : 'Mark Smith',
  review : 'What impressed me most about Zakaria Sisu was his proactive approach to problem-solving and his willingness to go the extra mile. Their full-stack skills and dedication ensured our project was completed to perfection',

  },
  {
  avatar : Avatar5,
  name : 'herry potter',
  review : ' I hav worked with several developers, but Zakaria Sisu stands out for their attention to detail and commitment to delivering top-notch solutions. his full-stack expertise allowed them to tackle every aspect of our project with confidence',

  }
]


const Testmonial = () => {
  return (
    <section id='section'>
    <div className='testi'>
      <h5>Review from client</h5>
      <h2>Testimonial</h2>
      
      <Swiper
        className='container testimonial__container'
        modules={[Pagination]}
        spaceBetween={45}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <div className='swipe'>
              <SwiperSlide className='testimonial' key={index}>
                <div className='client__avator'>
                  <img src={avatar} alt='avatar1'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
              </div>
            )
          })
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testmonial