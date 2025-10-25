import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
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
        {products.map((product) => (
          <div
            key={product.id}
            className="design-card"
            onClick={() => navigate(`/product/${product.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") navigate(`/product/${product.id}`); }}
          >
            <div className="design-img">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="rating">{"⭐".repeat(product.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Designs;
