import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="message-for-users">
            <span>
              Please contact me in any way you like.
            </span>
          </div>
          <div className="social-links">
            <div className="social-links-h">
              Social
            </div>
            <div className="social-likes-items">
              <a href="https://twitter.com/TaroSakazume">Twitter</a>
              <a href="https://github.com/emuzcode">Github</a>
              <a href="/">Wantedly</a>
            </div>
          </div>
          <div className="social-links">
            <div className="social-links-h">
              Contact
            </div>
            <div className="social-likes-items">
              <a href="mailto:ts95.business@gmail.com">Mail</a>
              <a href="https://twitter.com/TaroSakazume">Twitter</a>
            </div>
          </div>
          <div className="footer-menu social-links">
            <div className="footer-menu-h social-links-h">
              Other menu
            </div>
            <div className="footer-menu-links social-likes-items">
              <Link to="/" className='footer-menu-links-items'>Home.</Link>
              <Link to="/profile" className='footer-menu-links-items'>Profile.</Link>
              <Link to="/works" className='footer-menu-links-items'>Works.</Link>
              <Link to="/contact" className='footer-menu-links-items'>Contact.</Link>
            </div>
          </div>
          <div className="footer-btn">
            <a href="/contact" className='footer-btn-a'>Get Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-footer-bottom">
            <p>Japan</p>
          </div>
          <div className="right-footer-bottom">
            <p>2022. Taro Sakazueme. ALL RIGHT RESERVED</p>
          </div>
        </div>
      </div>
      <div className="footer-ticker">
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
        <div className="footer-ticker-item">&nbsp; - Taro Sakazume </div>
      </div>
    </div>
  )
}

export default Footer