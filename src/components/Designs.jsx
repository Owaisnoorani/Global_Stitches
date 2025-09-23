import React from "react";
import { Link } from "react-router-dom";  // 👈 import Link
import "./Designs.css";

const Designs = () => {
  return (
    <section className="designs-page">
      {/* Hero Section */}
      <div className="designs-hero">
        <h1>✨ Our Premium Embroidery Designs</h1>
        <p>
          At <span>Global Stitches.co</span>, we bring your imagination to life
          with <strong>world-class embroidery quality</strong>.  
          Every stitch is crafted with precision, durability, and elegance.
        </p>
      </div>

      {/* Quality Section */}
      <div className="designs-section">
        <div className="designs-text">
          <h2>🪡 Unmatched Design Quality</h2>
          <p>
            Our embroidery is not just decoration — it’s <strong>art on fabric</strong>.  
            Each design goes through detailed digitization ensuring sharp lines, vibrant
            threads, and perfect finishing that lasts wash after wash.
          </p>
          <ul>
            <li>✔️ Premium thread quality</li>
            <li>✔️ Color accuracy & precision</li>
            <li>✔️ Long-lasting durability</li>
          </ul>
        </div>
        <div className="designs-image">
          <img src="/gallery/design-quality.jpg" alt="Embroidery Quality" />
        </div>
      </div>

      {/* Machine Process Section */}
      <div className="designs-section reverse">
        <div className="designs-image">
          <img src="/gallery/embroidery-machine.jpg" alt="Embroidery Machine" />
        </div>
        <div className="designs-text">
          <h2>⚙️ Advanced Machine Technology</h2>
          <p>
            We use <strong>state-of-the-art embroidery machines</strong> that deliver
            consistency and precision at scale.  
            Every logo, patch, or artwork is digitized and then stitched by
            high-speed industrial embroidery machines.
          </p>
          <p className="highlight">
            🎯 The result? Sharp detailing, smooth finishes, and professional-grade embroidery.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="designs-closing">
        <h2>Why Choose Us?</h2>
        <p>
          With years of experience, a passion for perfection, and a commitment to quality,  
          we ensure that every stitch tells your story.
        </p>

        {/* 👇 Link to Gallery */}
        <Link to="/gallery">
          <button className="explore-btn">🚀 Explore Our Gallery</button>
        </Link>
      </div>
    </section>
  );
};

export default Designs;
