import React from 'react';
import gd from '../assets/gd.jpg'
import laptoptablet from '../assets/laptop-tablet.jpg';
import ad from '../assets/ad.jpg';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <h1>Creative & Data-Driven Advertising Agency</h1>
        <p>We help brands grow with strategic marketing, performance-driven campaigns, and eye-catching visuals that deliver results.</p>
        <button className='cta-btn'>Let's Grow Your Brand</button>
      </div>
      <div className='hero-img' id='img-top'>
        <img src={gd} alt="gd" />
      </div>
      <div className='white-circle-left'></div>
      <div className='circle-left'></div>
      <div className='lapimg'><img src={laptoptablet} alt="lap" className='laptopimage' /></div>
      <div className='ad'><img src={ad} alt="ad" /></div>
      <section id='circlediv'>
        <div className='center-circle'></div>
      </section>
      <div className='centercircle-blue'></div>
    </section>
  );
}
