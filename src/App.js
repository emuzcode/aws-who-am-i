import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Works from './Works/Works';
import Profile from './Profile/Profile';
import Contact from './Contact/Contact';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {
  let cursor = useRef(null);
  let posX1 = useRef(null);
  let posY1 = useRef(null);
  let mouseX1 = useRef(null);
  let mouseY1 = useRef(null);

  let tl1 = gsap.timeline();
  let tl2 = gsap.timeline();

  useEffect(()=> {
    let posX = posX1.current;
    let posY = posY1.current;
    let mouseX = mouseX1.current;
    let mouseY = mouseY1.current;
    tl1.to({}, 0.016, {
      repeat: -1,
      onRepeat: function(){
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl1.set(cursor, {
          css: {
            left: posX -50,
            top: posY - 50,
          },
        });
      }
    })
    document.addEventListener("mousemove", function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
    })
    tl2.from(cursor, {
      duration: 1.5,
      delay: 2,
      opacity: 0
    }, "-=1")
  })

  const load = gsap.timeline({
    paused: "true"
  })
  let loader = useRef(null);
  let percent = useRef(null);
  let bar = useRef(null);
  let barc = useRef(null);
  let progress = useRef(null);

  useEffect(()=>{
    load.to([percent, bar], {
      duration: .2,
      opacity: 0,
      zIndex: -1
    })
    load.to(progress, {
      duration: .8,
      width: "0%"
    })
    load.to(loader, {
      visibility: "hidden",
      zIndex: -1
    })
  })

  let id;
  let width1 = 0;
  let width2 = 0;

  function loading(){
    id = setInterval(frame, 50);
  }
  function frame(){
    if (width1 ===  384400 && width2 >= 100) {
      clearInterval(id);
      load.play();
    }
    else {
      width1 = width1 + 3844;
      width2 = width2 + 1;
      document.getElementById("barc").style.width = width2 + "%";
      document.getElementById("percent").innerHTML = width1 + "km";
    }
  }
  window.addEventListener("load", (e)=>{
    loading();
  })

  return (
    <div>
      <Router>
        <ScrollToTop />
        <div className="noise"></div>
        <div className="App">
          <div className="loader" ref={(el) => (loader = el)}>
            <div className="progress" ref={(el) => (progress = el)}>
              <div id="percent" ref={(el) => (percent = el)}>
                0km
              </div>
              <div id="bar" ref={(el) => (bar = el)}>
                <div id="barc" ref={(el) => (barc = el)}></div>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/" exact><Home /></Route>
          </Switch>
          <Switch>
            <Route path="/profile" exact><Profile /></Route>
          </Switch>
          <Switch>
            <Route path="/works" exact><Works /></Route>
          </Switch>
          <Switch>
            <Route path="/contact" exact><Contact /></Route>
          </Switch>
          <div className="cursor-follower" ref={ el => cursor = el }></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
