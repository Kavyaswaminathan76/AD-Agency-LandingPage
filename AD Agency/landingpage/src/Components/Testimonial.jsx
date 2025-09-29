import React from "react"; 

function Testimonial() {
  return (
    <section className="testimonial" id="testimonial">
      <h2 className="testimonial-text">Testimonial</h2>
      <p>What Our Client Says About Us</p>
      <p>We care what our customers think of us and <br />so should you. We are partners in your business <br />and your success.</p>
      <button className="btn">Know More</button>
      <div className="bg-circle"></div>
      <div className="test-card2"></div>
      <div className="testimonial-card">
        <blockquote> "The best agency we've worked with! Exceptional strategies & great ROI." </blockquote>
        <h4>Sophia Reynolds</h4>
        <span>Founder of Elevate Marketing Solutions</span>
      </div>
    </section>
  );
}

export default Testimonial;
