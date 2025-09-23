// src/components/Products.jsx
import React from "react";
import products from "../data/products";
import { Link } from "react-router-dom";
import "./Products.css"; // agar alag css file chahiye

const Products = () => {
  return (
    <section className="products-section">
      <h2 className="products-heading">Logo Patches Collection</h2>
      <p className="products-subtext">
        Professional embroidered logo patches for businesses and organizations.
      </p>

      <h2 className="products-heading">Clothing Logos Collection</h2>
      <p className="products-subtext">
        Custom embroidered logos for apparel and clothing items...
      </p>

      <div className="products-grid">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`} className="view-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
