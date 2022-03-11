import React, {useRef, useEffect} from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'

function Header({timeline}) {
  let li1 = useRef(null);
  let li2 = useRef(null);
  let li3 = useRef(null);
  let li4 = useRef(null);

  useEffect(()=> {
    timeline.from([li1, li2, li3, li4], {
      opacity: 0,
      duration: 1,
      delay: .2,
      y: 20,
      stagger: {
        amount: .6
      }
    })
  })

  return (
    <div>
      <header>
        <div id="logo"></div>
        <div className="toggle-menu">
          <AiOutlineMenu className="toggle-menu-icon" alt="" /> {/* additional */}
        </div>
        <ul className="menu-items">
          <li ref={el => li1 = el}>
            <Link to="/" className='li'>Home</Link>
          </li>
          <li ref={el => li2 = el}>
            <Link to="/profile" className='li'>Profile</Link>
          </li>
          <li ref={el => li3 = el}>
            <Link to="/works" className='li'>Works</Link>
          </li>
          <li ref={el => li4 = el}>
            <Link to="/contact" className='li'>Contact</Link>
          </li>
        </ul>
      </header>
    </div>
  )
};

export default Header;