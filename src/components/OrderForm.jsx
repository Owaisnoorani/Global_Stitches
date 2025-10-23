import React, { useState } from "react";
import "./OrderForm.css";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fileFormat: "",
    size: "",
    turnaroundTime: "",
    complexity: "",
    additionalInfo: "",
    designFile: null,
    name: "",
    email: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== "") {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch('http://localhost:5000/api/submit-order', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitMessage("Order submitted successfully! We'll contact you soon.");
        setFormData({
          fileFormat: "",
          size: "",
          turnaroundTime: "",
          complexity: "",
          additionalInfo: "",
          designFile: null,
          name: "",
          email: "",
          phone: ""
        });
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Error: ${errorData.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitMessage(`Connection error: ${error.message}. Make sure the server is running.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order-form" className="order-form">
      <h2 className="form-heading">Place Your Order</h2>
      <p className="form-subtext">
        Fill out the form below to get started with your custom embroidery project!
      </p>

      <form className="form-container" onSubmit={handleSubmit}>
        {/* Project Details Section */}
        <div className="form-section">
          <h3 className="section-heading">Project Details</h3>
          
          {/* Select Fields */}
          <div className="form-row">
            <select 
              name="fileFormat" 
              value={formData.fileFormat} 
              onChange={handleInputChange}
              required
            >
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

            <select 
              name="size" 
              value={formData.size} 
              onChange={handleInputChange}
              required
            >
              <option value="">Size*</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div className="form-row">
            <select 
              name="turnaroundTime" 
              value={formData.turnaroundTime} 
              onChange={handleInputChange}
              required
            >
              <option value="">Turnaround Time*</option>
              <option>1 Day</option>
              <option>2-3 Days</option>
              <option>5 Days</option>
            </select>

            <select 
              name="complexity" 
              value={formData.complexity} 
              onChange={handleInputChange}
              required
            >
              <option value="">Complexity*</option>
              <option>Simple</option>
              <option>Medium</option>
              <option>Complex</option>
            </select>
          </div>

          {/* Additional Details */}
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
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
              name="designFile"
              accept=".eps,.jpeg,.jpg,.png,.pes,.dst,.ai,.pdf"
              className="file-input"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="form-section">
          <h3 className="section-heading">Contact Details</h3>
          
          <div className="form-row">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name*"
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address*"
              required
              className="form-input"
            />
          </div>

          <div className="form-row">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number*"
              required
              className="form-input"
            />
            <div className="form-input-placeholder"></div>
          </div>
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
            {submitMessage}
          </div>
        )}

        {/* Submit */}
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Details"}
        </button>
      </form>
    </section>
  );
};

export default OrderForm;
