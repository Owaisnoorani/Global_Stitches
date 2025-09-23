import React from "react";
import "./LogoPatches.css";

const LogoPatches = () => {
  return (
    <section className="patches-page">
      {/* Hero Section */}
      <div className="patches-hero">
        <h1>🧵 Custom Logo Patches</h1>
        <p>
          At <span>Global Stitches.co</span>, we create{" "}
          <strong>professional logo patches</strong> for uniforms, jackets,
          hats, and branding.  
          Durable, vibrant, and perfectly stitched for a premium finish.
        </p>
      </div>

      {/* Quality Section */}
      <div className="patches-section">
        <div className="patches-text">
          <h2>🎨 High-Quality Embroidery</h2>
          <p>
            Each patch is digitized with care to maintain{" "}
            <strong>sharp lines, accurate colors</strong>, and lasting strength.
          </p>
          <ul>
            <li>✔️ Premium threads</li>
            <li>✔️ Fade-resistant colors</li>
            <li>✔️ Long-lasting durability</li>
          </ul>
        </div>
        <div className="patches-image">
          <img src="/gallery/logo-patch-quality.jpg" alt="Logo Patch Quality" />
        </div>
      </div>

      {/* Uses Section */}
      <div className="patches-section reverse">
        <div className="patches-image">
          <img src="/gallery/patch-uniform.jpg" alt="Patch on Uniform" />
        </div>
        <div className="patches-text">
          <h2>👕 Perfect for Every Use</h2>
          <p>
            Whether it’s <strong>corporate uniforms</strong>,{" "}
            <strong>school badges</strong>, or{" "}
            <strong>fashion branding</strong> — our logo patches give a
            professional edge to your identity.
          </p>
          <p className="highlight">
            🎯 Designed for everyday wear & tear with lasting stitch quality.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="patches-closing">
        <h2>Why Choose Our Patches?</h2>
        <p>
          Because we combine <strong>artistry</strong>,{" "}
          <strong>technology</strong>, and <strong>durability</strong> into
          every single patch we design.
        </p>
        <button
          className="explore-btn"
          onClick={() => (window.location.href = "/gallery")}
        >
          🚀 Explore Our Gallery
        </button>
      </div>
    </section>
  );
};

export default LogoPatches;
