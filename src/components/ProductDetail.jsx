import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [rating, setRating] = useState(0); // ⭐ ab hamesha empty start
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!product) return <div style={{ padding: "2rem" }}>Product not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ productId: product.id, rating, comment });
    setSubmitted(true);
    setComment("");
  };

  return (
    <div className="product-detail">
      {/* Image Section */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Info Section */}
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>

        {/* Rating */}
        <div className="rating-section">
          <h3>Rate this Product:</h3>
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              className={s <= rating ? "star selected" : "star"}
              onClick={() => setRating(s)}
            >
              {s <= rating ? "⭐" : "☆"}
            </span>
          ))}
        </div>

        {/* Review Form */}
        <form className="comment-section" onSubmit={handleSubmit}>
          <h3>Leave a review</h3>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your feedback here..."
          />
          <button className="submit-btn" type="submit">
            Submit review
          </button>
          {submitted && (
            <p style={{ color: "green" }}>
              ✅ Thank you — your review is saved (demo).
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
