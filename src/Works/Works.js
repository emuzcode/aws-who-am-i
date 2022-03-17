import React, { useEffect, useRef } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Works.scss'
//import '../Assets/arrow.svg'
import gsap from 'gsap';

function Works() {

  const timeline_work = gsap.timeline();
  let text1 = useRef(null);
  let itemsWork = useRef(null);

  useEffect(()=> {
    timeline_work.from(text1, {
      duration: 1,
      skewY: 10,
      y: 500,
      delay: 2,
      stagger: {
        amount: .4
      },
      opacity: 0
    }, "-=1.5")
    timeline_work.from(itemsWork, {
      duration: .5,
      opacity: 0,
      y: 100
    })
  })

  return (
    <div>
      <Header timeline={timeline_work}/>
      <div className="work-page">
        <div className="my-works">
          <h1 ref={el => text1 =el}>
            my <br />
            works
          </h1>
        </div>
        <div className="work-page-container">
          <div className="work-page-items" ref={el => itemsWork = el}>
            <div className="work-page-item">
              <div className="work-page-item-number">
                <p>01/02</p>
              </div>
              <a href="/">
                <div className="work-page-item-header">
                  <h1>Lorem, ipsum.</h1>
                  <p>Lorem, ipsum.</p>
                </div>
                <div className="work-page-item-image work-page-item-image1"></div>
                <div className="work-page-item-footer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  {/* <img src={arrow} alt="" /> */}
                </div>
              </a>
            </div>
            <div className="work-page-item">
              <div className="work-page-item-number">
                <p>02/02</p>
              </div>
              <a href="/">
                <div className="work-page-item-header">
                  <h1>Lorem, ipsum.</h1>
                  <p>Lorem, ipsum.</p>
                </div>
                <div className="work-page-item-image work-page-item-image2"></div>
                <div className="work-page-item-footer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  {/* <img src={arrow} alt="" /> */}
                </div>
              </a>
            </div>
          </div> 
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Works