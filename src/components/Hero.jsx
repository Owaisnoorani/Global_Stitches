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
        Professional logo patches and embroidery designs for businesses, brands,
        and organizations across the globe.
      </p>
      <div className="btn-container">
        <button className="btn btn-order" onClick={handleOrderNow}>
          Order Now
        </button>
        <button className="btn btn-gallery" onClick={() => navigate("/gallery")}>
          View Gallery
        </button>
      </div>
    </section>
  );
};

export default Hero;
