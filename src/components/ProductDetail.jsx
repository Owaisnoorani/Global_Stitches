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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!product) return <div style={{ padding: "2rem" }}>Product not found</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!rating) {
      setError("Please select a rating");
      return;
    }
    if (!comment.trim()) {
      setError("Please write a review");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch('http://localhost:5000/api/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          rating: rating,
          comment: comment,
          // Optional: Add customer details if you want to collect them
          // customerName: '',
          // customerEmail: ''
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setComment("");
        setRating(0);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(data.message || 'Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('Failed to submit review. Please try again.');
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            required
          />
          {error && (
            <p style={{ color: "#d9534f", marginTop: "0.5rem", fontSize: "0.95rem" }}>
              ⚠️ {error}
            </p>
          )}
          <button 
            className="submit-btn" 
            type="submit"
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Submitting..." : "Submit review"}
          </button>
          {submitted && (
            <p style={{ color: "#5cb85c", marginTop: "0.5rem", fontSize: "0.95rem" }}>
              ✅ Thank you! Your review has been submitted successfully.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
