// import React from 'react'
// import person from '../assets/person.jpg';
// import team from '../assets/teambusiness.jpg';

// export default function Team() {
//   return (
//     <section className='team'>
//         <div className='card1'></div>
//         <img src={person} alt="" id='personimg'/>
//         <h1 className='persontext'>"We transform brands with creativity <br /> & data-driven insights."</h1>
//         <h2 className='fname'>Mr. Jhon</h2> <p className='ftext'>Founder of AD Agency</p>
//         <div className='team2'>
//             <h2 className='team2text'>Meet our passionate team of marketing experts!</h2>
//             <button className='btn-team'>Visit Our Team </button>
//             <div className='card2'></div>
//             <img src={team} alt="" id='meeting'/>
//         </div>
//     </section>
//   )
// }

import React from "react"; 
import person from '../assets/person.jpg';
import team from '../assets/teambusiness.jpg';

function Team() {
  return (
    <section className="team-section">
      <div className="team-left">
        <div className="card-one"></div>
        <img src={person} alt="Founder" className="founder-img" />
        <blockquote> “We transform brands with creativity & data-driven insights.” </blockquote>
        <p className="founder-name">Mr. Jhon</p>
        <small>Founder of AD Agency</small>
      </div>

      <div className="team-right">
        <div className="team-info">
          <h3>Meet our passionate team of marketing experts!</h3>
          <button className="team-btn">Visit Our Team →</button>
        </div>
        <div className="card-two"></div>
        <img src={team} alt="Team" className="team-photo"/>
      </div>
    </section>
  );
}

export default Team;
