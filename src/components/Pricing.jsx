import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <h2 className="pricing-title">💼 Recommended Pricing for a New Startup</h2>

      {/* Flat Rate */}
      <div className="pricing-cards">
        <div className="card simple">
          <h3>Simple <span>$10–$12</span></h3>
          <ul>
            <li>Basic designs</li>
            <li>Single color</li>
            <li>Small size</li>
          </ul>
        </div>
        <div className="card medium">
          <h3>Medium <span>$15–$20</span></h3>
          <ul>
            <li>Multiple colors</li>
            <li>Medium complexity</li>
            <li>Standard size</li>
          </ul>
        </div>
        <div className="card complex">
          <h3>Complex <span>$25–$35+</span></h3>
          <ul>
            <li>Intricate details</li>
            <li>Heavy stitches</li>
            <li>Large logos</li>
          </ul>
        </div>
      </div>

      {/* Pay-Per-Stitch */}
      <div className="stitch-pricing">
        <h3>Pay-Per-Stitch Pricing</h3>
        <p>$0.75–$1.50 per 1,000 stitches (minimum $8–$10)</p>
        <div className="examples">
          <div className="example">Example 1: 8,000 stitches → $8</div>
          <div className="example">Example 2: 20,000 stitches → $25</div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="additional-services">
        <div className="service rush">⏱ Rush Orders <span>$5–$10</span></div>
        <div className="service edit">⭐ Design Edits <span>Free–$2</span></div>
        <div className="service proof">✅ Proof Image <span>$2</span></div>
      </div>

      {/* Comparison Table */}
      <div className="comparison">
        <h3>Quick Comparison Table</h3>
        <table>
          <thead>
            <tr>
              <th>Service Type</th>
              <th>Price Range</th>
              <th>Detail</th>
              <th>Turnaround</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Simple Design</td>
              <td>$10–$12</td>
              <td>Basic Logo</td>
              <td>24–36 hrs</td>
            </tr>
            <tr>
              <td>Medium Design</td>
              <td>$15–$20</td>
              <td>Standard Logo</td>
              <td>2–3 days</td>
            </tr>
            <tr>
              <td>Complex Design</td>
              <td>$25–$35+</td>
              <td>Large/Heavy</td>
              <td>3–5 days</td>
            </tr>
            <tr>
              <td>Per-Stitch Pricing</td>
              <td>$0.75–$1.50 /1,000</td>
              <td>Large Orders</td>
              <td>3–7 days</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Pricing;
