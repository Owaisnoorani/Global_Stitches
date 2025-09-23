import React from "react";
import "./OrderForm.css";

const OrderForm = () => {
  return (
    <section id="order-form" className="order-form">
      <h2 className="form-heading">Place Your Order</h2>
      <p className="form-subtext">
        Fill out the form below to get started with your custom embroidery project!
      </p>

      <form className="form-container">
        {/* Select Fields */}
        <div className="form-row">
          <select required>
            <option value="">File Format*</option>
            <option>JPG</option>
            <option>JPEG</option>
            <option>PNG</option>
            <option>PES</option>
            <option>DST</option>
            <option>EPS</option>
            <option>AI</option>
            <option>PDF</option>
          </select>

          <select required>
            <option value="">Size*</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="form-row">
          <select required>
            <option value="">Turnaround Time*</option>
            <option>1 Day</option>
            <option>2-3 Days</option>
            <option>5 Days</option>
          </select>

          <select required>
            <option value="">Complexity*</option>
            <option>Simple</option>
            <option>Medium</option>
            <option>Complex</option>
          </select>
        </div>

        {/* Additional Details */}
        <textarea
          placeholder="Any special requirements, color preferences, or additional information..."
        />

        {/* File Upload */}
        <div className="file-upload">
          <label htmlFor="designFile" className="upload-label">
            <p>📂 Click to upload or drag and drop</p>
            <p className="small-text">
              Allowed: .EPS, .JPEG, .JPG, .PNG, .PES, .DST, .AI, .PDF (max 10MB)
            </p>
          </label>
          <input
            type="file"
            id="designFile"
            accept=".eps,.jpeg,.jpg,.png,.pes,.dst,.ai,.pdf"
            className="file-input"
            required
          />
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">
          Continue to Contact Details →
        </button>
      </form>
    </section>
  );
};

export default OrderForm;
