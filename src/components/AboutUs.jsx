import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We specialize in premium embroidery, logo patches, and creative
            designs. Our goal is to provide high-quality products with a perfect
            blend of tradition and modern style.
          </p>
          <button className="learn-more">Learn More</button>
        </div>

        <div className="about-image">
          <img
            src="public\gallery\4.jpeg"
            alt="About Global Stitches"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
