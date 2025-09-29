import React from "react";
import deliveryperson from '../assets/deliveryperson.jpg';
import campaign from '../assets/campaign.jpg';
import mobile from '../assets/mobile.jpg';

function Projects() {
    return (
        <section className="projects">
            <div className="projects-header">
                <div>
                    <span className="tag">PROJECTS</span>
                    <h2>Transforming Brands with Creative & Data–Driven Strategies</h2>
                </div>
                <div>
                    <p> From brand storytelling to data-driven campaigns, our latest projects have helped businesses grow and engage their audience effectively. Check out how we bring ideas to life! </p>
                    <button className="case-btn">View More Case Studies →</button>
                </div>
            </div>

            <div className="projects-grid">
                <div className="project-card large">
                    <img src= {deliveryperson} alt="E-Commerce" id='large' />
                    <div className="overlay">
                        <h3>E-Commerce Ads for ShopEase</h3>
                        <p> We optimized ShopEase ads with data-driven targeting, achieving a 5X ROI. </p>
                    </div>
                </div>

                <div className="project-card small">
                    <img src={campaign} alt="Campaign" />
                    <div className="overlay">
                        <h3>Campaign for VisionVote</h3>
                    </div>
                </div>

                <div className="project-card small">
                    <img src={mobile} alt="Social Media" />
                    <div className="overlay">
                        <h3>Social Media Strategy for TrendHive</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
