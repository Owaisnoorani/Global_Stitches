import React from "react";
import { useNavigate } from "react-router-dom";
import vectorProduct from "../data/vectorProduct";
import "./Designs.css";

const Designs = () => {
  const navigate = useNavigate();

  return (
    <section className="designs-page">
      {/* Hero Section */}
      <div className="designs-hero">
        <h1>Vector Designs</h1>
        <p>
          At <span>Global Stitches.co</span>, Discover our collection of high-quality vector artworks. 
          Each design is professionally illustrated with clean lines and scalable precision, 
          ready for printing, screen printing, or any digital application.
        </p>
      </div>

      {/* Products Grid */}
      <div className="designs-grid">
        {vectorProduct.map((vectorProduct) => (
          <div
            key={vectorProduct.id}
            className="design-card"
            onClick={() => navigate(`/product/${vectorProduct.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") navigate(`/product/${vectorProduct.id}`); }}
          >
            <div className="design-img">
              <img src={vectorProduct.image} alt={vectorProduct.name} loading="lazy" />
            </div>
            <h3>{vectorProduct.name}</h3>
            <p className="price">{vectorProduct.price}</p>
            <p className="rating">{"⭐".repeat(vectorProduct.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Designs;
