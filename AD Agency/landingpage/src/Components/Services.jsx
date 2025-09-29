import React from 'react'
import arrow from '../assets/arrowwhite.png'

export default function Services() {
  return (
    <div className='services'>
      <div className='btn-service'>Services</div>
      <div className='service-text'>
        <h2 className='h2'>Strategic Solutions to Elevate Your Brand</h2>
        <p>From building a strong brand identity to executing high- <br />impact campaigns, we craft data-driven strategies that <br />drive engagement, increase visibility, and maximize growth.</p>
      </div>
      <div className='service-card'>
        <hr />
        <h4 className='brand'>BRAND STRATEGY</h4>
        <div className='show'>
          <div className='inside-circle'></div>
          <img src={arrow} alt="" className='arrowimg' id='arrow1'/>
        </div>
        <h4 className='ppc'>PPC ADVERTISING</h4>
        <div className='show' id='show2'>
            <div className='inside-circle'></div>
            <img src={arrow} alt="" className='arrowimg' id='arrow2' />  
        </div>
      </div> <hr />
      <div className='service-card2'>
           <h4 className='digital'>DIGITAL MARKETING</h4>
           <div className='show'>
              <div className='inside-circle'></div>
              <img src={arrow} alt="" className='arrowimg' id='arrow3'  />  
           </div>
           <h4 className='analytic'>ANALYTICS & REPORT</h4>
           <div className='show' id='show4'>
              <div className='inside-circle'></div>
              <img src={arrow} alt="" className='arrowimg' id='arrow4' />
           </div> <hr />
      </div>
    </div>
  )
}
