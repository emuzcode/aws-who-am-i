import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Contact.scss';

function Contact() {
  const timeline_contact = gsap.timeline();
  let text1 = useRef(null);
  useEffect(()=> {
    timeline_contact.from(text1, {
      duration: 1,
      skewY: 10,
      y: 500,
      stagger: {
        amount: .4
      },
      opacity: 0
    }, "-=1")
  })

  return (
    <div>
      <Header timeline={timeline_contact}/>
      <div className="contact-page">
        <div className="contact-page-container">
          <h1 ref={el => text1 = el}>
            Contact Me 
            <img src="#" alt="" />
          </h1>
          <ul>
            <li>
              <p>Mail</p>
            </li>
            <li>
              <p>Twitter</p>
            </li>
            <li>
              <p>Discord</p>
            </li>
            <li>
              <p>Slack</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact