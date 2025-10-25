import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  // Scroll to Order Form section
  const handleOrderNow = () => {
    const orderForm = document.getElementById("order-form");
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero fadeIn">
      <h2>Premium Embroidery Services Worldwide</h2>
      <p>
        We specialize in creating high-quality custom logo patches and embroidery designs for businesses, brands, and organizations worldwide.
        With a focus on precision, creativity, and fast turnaround, we deliver designs that elevate your brand identity and ensure every stitch reflects excellence. 
        Whether you need digitized artwork for apparel, promotional items, or professional branding, our team provides top-tier quality and service trusted by clients across the globe.
      </p>
      <div className="btn-container">
        <button className="btn btn-order" onClick={handleOrderNow}>
          Order Now
        </button>
        <button className="btn btn-gallery" onClick={() => navigate("/gallery")}>
          View Digitizing Designs
        </button>
      </div>
    </section>
  );
};

export default Hero;
