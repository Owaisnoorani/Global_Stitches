import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import "./Gallery.css";

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="gallery-page">
      <h2>Our Products</h2>
      <div className="gallery-grid">
        {products.map((p) => (
          <div
            key={p.id}
            className="product-card"
            onClick={() => navigate(`/product/${p.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") navigate(`/product/${p.id}`); }}
          >
            <div className="product-img">
              <img src={p.image} alt={p.name} loading="lazy" />
            </div>

            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <p className="rating">{"⭐".repeat(p.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
