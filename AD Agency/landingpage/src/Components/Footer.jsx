import React from "react";  
import mail from '../assets/msg.png';
import phone from '../assets/phone.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Let's Talk</h2>
        <div className="footer-contact">
          <img src={mail} alt="" /> <span className="mailtext"> ADgency@gmail.com</span>
          <img src={phone} alt="" /><span className="num"> 6834069216</span>
        </div>
      </div>

      <div className="footer-bottom">
        <ul className="footer-links">
          <li><a href="#about">About &nbsp;&nbsp;|</a></li>
          <li><a href="#services">Services &nbsp;&nbsp; |</a></li>
          <li><a href="#contact">Contact &nbsp;&nbsp; |</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
 
      </div>
    </footer>
  );
}

export default Footer;
