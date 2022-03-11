import React, {useRef, useEffect} from 'react'
import Header from '../Header/Header';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';
import './Profile.scss'
import gsap from 'gsap';
//import flower from '../Assets/flower.svg'


function Profile() {

  let text1 = useRef(null);
  let text2 = useRef(null);
  let image = useRef(null);
  let p1 = useRef(null);
  const timeline_profile = gsap.timeline();
  useEffect(()=> {
    timeline_profile.from([text1, text2], {
      duration: .8,
      y: 500,
      skewY: 10,
      stagger: {
        amount: .4
      }
    }, "-=.5")
    timeline_profile.from(image, {
      duration: 1.5,
      y: 300,
      delay: .2,
      opacity: 0
    }, "-=.5")
    timeline_profile.from(p1, {
      duration: .5,
      x: 200,
      skewX: 10,
      opacity: 0
    })
  })


  return (
    <>
    
    <div>
      <div className="profile">
        <Header timeline = {timeline_profile} />
        <div className="profile-container">
          <div className="container-text">
            <div className="container-inner-text1">
              <p ref={el => text1 = el}>
                Taro
              </p>
            </div>
            <div className="container-inner-text2">
              <p ref={el => text2 = el}>
                Sakazume
              </p>
            </div>
          </div>

          <div ref={el => p1 = el} className="container-quote container-quote1">
            I create sites and <br /> applications that cause <br /> pleasant emotions.
          </div>
          <div className="container-quote container-quote2">
            I specialize in interaction <br /> design, experience websites <br /> and applications.
          </div>
          <div className="container-image" ref={el => image = el}></div>
        </div>

        <div className="profile-container2">
          <div className="profile-container2-heading">
            <div className="profile-text-lower">
              <p>Web Designer,</p>
            </div>
            <div className="profile-text-lower">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front-End</p>
            </div>
            <div className="profile-text-lower">
              <p>&nbsp;Developer&nbsp;&nbsp;&nbsp; &</p>
            </div>
            <div className="profile-text-lower">
              <p>&nbsp;&nbsp;&nbsp;&nbsp; a Youtuber</p>
            </div>
          </div>
          <div className="profile-container2-p">
            <p>Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Possimus, laboriosam.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eius amet eligendi odio, temporibus commodi.</p>
            <p className="about-container2-p-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste laboriosam ad, <br /> dolorem aperiam, sit ullam.
            </p>
            <p>Lorem ipsum dolor sit amet.<br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, laboriosam?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, rem ex? Fugit rem exercitationem doloremque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Consectetur id laborum veniam?</p>
          </div>
          <div className="profile-container2-heading2">
            <div className="profile-text-lower">
              <p>What is my feature?</p>
            </div>
          </div>
          <div className="profile-container2-p">
            <p className="profile-container2-p-right">
              Lorem ipsum dolor sit amet.<br /> Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet.
            </p>
            <p>Lorem ipsum dolor sit amet. <br />Lorem ipsum dolor sit amet. <br />Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="profile-container-flower">
            {/* <img src={flower} alt="" /> */}
          </div>
        </div>
        <div className="profile-footer">
          <GetInTouch />
          <Footer />
        </div>
      </div>
    </div>

    </>
  )
}

export default Profile