import React from "react";
import "./Pricing.css";
import { Sparkles, Layers, Crown, Clock, Edit3, CheckCircle, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      {/* <h2 className="pricing-title">💼 Recommended Pricing for a New Startup</h2> */}

      {/* Flat Rate */}
      <div className="pricing-cards">
        <div className="card simple">
          <div className="card-icon">
            <Sparkles size={32} />
          </div>
          <h3>Simple</h3>
          <span>$8–$10</span>
          <ul>
            <li>Basic designs</li>
            <li>Single color</li>
            <li>Small size</li>
          </ul>
        </div>
        <div className="card medium">
          <div className="card-icon">
            <Layers size={32} />
          </div>
          <h3>Medium</h3>
          <span>$12–$15</span>
          <ul>
            <li>Multiple colors</li>
            <li>Medium complexity</li>
            <li>Standard size</li>
          </ul>
        </div>
        <div className="card complex">
          <div className="card-icon">
            <Crown size={32} />
          </div>
          <h3>Complex</h3>
          <span>$20–$25+</span>
          <ul>
            <li>Intricate details</li>
            <li>Heavy stitches</li>
            <li>Large logos</li>
          </ul>
        </div>
      </div>

      {/* Pay-Per-Stitch */}
      {/* <div className="stitch-pricing">
        <h3>Pay-Per-Stitch Pricing</h3>
        <p>$0.75–$1.50 per 1,000 stitches (minimum $8–$10)</p>
        <div className="examples">
          <div className="example">Example 1: 8,000 stitches → $8</div>
          <div className="example">Example 2: 20,000 stitches → $25</div>
        </div>
      </div> */}

      {/* Additional Services */}
      <div className="additional-services">
        <div className="service rush">
          <Clock size={28} className="service-icon" />
          <div className="service-content">
            <div className="service-title">Rush Orders</div>
            <span>No Additional Charges</span>
          </div>
        </div>
        <div className="service edit">
          <Edit3 size={28} className="service-icon" />
          <div className="service-content">
            <div className="service-title">Design Edits</div>
            <span>Free–$2</span>
          </div>
        </div>
        <div className="service proof">
          <CheckCircle size={28} className="service-icon" />
          <div className="service-content">
            <div className="service-title">Proof Image</div>
            <span>Free with Order</span>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="comparison">
        <h3>Price Range </h3>
        <div className="comparison-table">
          <div className="table-header">
            <div className="table-cell">Service Type</div>
            <div className="table-cell">Price Range</div>
            <div className="table-cell">Detail</div>
            <div className="table-cell">Turnaround</div>
          </div>
          <div className="table-body">
            <div className="table-row">
              <div className="table-cell service-name">
                <Sparkles size={20} className="row-icon" />
                <span>Simple Design</span>
              </div>
              <div className="table-cell">
                <span className="price-badge">$8–$10</span>
              </div>
              <div className="table-cell">Basic Logo</div>
              <div className="table-cell">
                <span className="time-badge fast">2–4 hrs</span>
              </div>
            </div>
            <div className="table-row popular">
              <div className="table-cell service-name">
                <Layers size={20} className="row-icon" />
                <span>Medium Design</span>
                <span className="popular-badge">Most Popular</span>
              </div>
              <div className="table-cell">
                <span className="price-badge">$12–$15</span>
              </div>
              <div className="table-cell">Standard Logo</div>
              <div className="table-cell">
                <span className="time-badge medium">6–8 hrs</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell service-name">
                <Crown size={20} className="row-icon" />
                <span>Complex Design</span>
              </div>
              <div className="table-cell">
                <span className="price-badge">$20–$25+</span>
              </div>
              <div className="table-cell">Large/Heavy</div>
              <div className="table-cell">
                <span className="time-badge slow">1–2 days</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell service-name">
                <Zap size={20} className="row-icon" />
                <span>Per-Stitch Pricing</span>
              </div>
              <div className="table-cell">
                <span className="price-badge">$0.75–$1.50 /1,000</span>
              </div>
              <div className="table-cell">Large Orders</div>
              <div className="table-cell">
                <span className="time-badge slow">3–7 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
