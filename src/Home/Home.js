import React, {useRef, useEffect} from 'react';
import Header from '../Header/Header';
import './Home.scss';
import earth from '../Assets/earth2.png'
//import another from '../Assets/anothersvg'
//import arrow from '../Assets/arrow.svg'
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import gsap from 'gsap';

function Home() {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = gsap.timeline();
  useEffect(()=> {
    timeline_home.from([text1, text2, text3, text4], {
      duration: 1,
      skewY: 15,
      y: 400,
      stagger: {
        amount: .2
      }
    }, "-=1.2")
    timeline_home.from(p1, {
      duration: .6,
      x: -100,
      delay: .2,
      opacity: 0
    })
  })


  return (
    <div className="home">
      <Header timeline = {timeline_home} />
      <div className="container">
        <div className="container1">
          <div className="txt-line" id='taro'>
            <p ref={el => text1 = el }>Taro</p>
          </div>
          <div className="txt-line line-bottom" id="sakazume">
            <p ref={el => text2 = el }>Sakazume</p>
          </div>
        </div>
      </div>
      <div className="left-side-quote">
        <p ref={el => p1 = el }>
          Who are you ?<br />
          未経験からエンジニアという職業の道へ<br />
          職業訓練校ICTエンジニア科にて勉強中<br />
          テクノロジーでエンターテイメント業界に貢献したい
        </p>
      </div>

      <div className="container">
        <div></div>
        <div className="container1">
          <div className="txt-line" id="digital">
            <p ref={el => text3 = el }>Web</p>
          </div>
          <div className="txt-line line-bottom" id="designer">
            <p ref={el => text4 = el }>Developer</p>
          </div>
        </div>
      </div>
      <div className="left-side-quote2">
        <p ref={el => p1 = el }>
          Why ?<br />
          ０から１を作る魅力的な仕事<br />
          様々な業界に対して掛け算になる可能性<br />
          マイノリティ側の人をテクノロジーで助けたい
        </p>
      </div>
      <div className="earth-png">
        <img src={earth} alt="" />
      </div>
      <div className="short-about">
        <div className="main-h1-short-about">
          <h1 className="main-short-about">
            Shortly
          </h1>
          <h1 className="main-short-about">
            About
          </h1>
          <h1 className="main-short-about">
            Myself
          </h1>
        </div>
        <div className="sub-main-p-short-about">
          <p className="sub-main-short-about">
            １９９５年１０月に埼玉県秩父市で生まれ<br />
            神奈川県相模原市で育つ<br />
            高校２年の夏にNew Zealandに留学<br />
            アメリカのロサンゼルスにある短大を卒業<br />
            一流の接客を極めたいと決めホテル業界へ<br />
            あるきっかけを通じてエンジニアの道にシフト<br />
            ギターと料理が趣味<br />
            実は新宿南口で路上バンドもしていた
          </p>
          <p className="sub-main-short-about">
            
          </p>
        </div>
        <div className="another">
          {/* <img src={another} alt="" /> */}
        </div>
      </div>
      <div className="my-skills-main-reel">
        <div className="my-skills-reel" id="skill-reel">
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
        </div>
        <div className="skill-set-boxes">
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">HTML5</h1>
            <p className="skill-set-box-p">I mainly used to develop Website Markup</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">CSS3</h1>
            <p className="skill-set-box-p">I used this style and bring design to browsers</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">javascript</h1>
            <p className="skill-set-box-p">With this technology i create visual effects and interaction and </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">React.js</h1>
            <p className="skill-set-box-p">I loved it! I use it to create appliactions that have lot of react</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Greensock - GSAP</h1>
            <p className="skill-set-box-p">I used this as an animation library, Th most loved ones!</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Three.js</h1>
            <p className="skill-set-box-p">This library deals and simplifies the working with webgl and glsl</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Sass</h1>
            <p className="skill-set-box-p">I prefer this also instead of CSS because of advance functionality</p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Node.js</h1>
            <p className="skill-set-box-p">I use it to writing server scripting for applications</p>
            <p>___</p>
          </div>
        </div>
        <div className="project-and-work">
          <h1>
            <Link className="h1-work" to="/works">
              My Projects and Works {/*<img src={arrow} alt="" />*/}
            </Link>
          </h1>
          <br />
          <p>Click me!</p>
        </div>

        <Footer />
      </div>
    </div>
  )
};

export default Home;