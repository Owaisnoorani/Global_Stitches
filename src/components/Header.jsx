import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll function for Home sections
  const handleScroll = (id) => {
    setMenuOpen(false); // close menu when clicking
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header slideDown">
      <h1>
        Global <span>Stitches.co</span>
      </h1>

      {/* Hamburger Menu Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Digitizing Designs</Link></li>
          <li><Link to="/designs" onClick={() => setMenuOpen(false)}>Vector Designs</Link></li>
          <li>
            <button className="nav-link-btn" onClick={() => handleScroll("pricing")}>
              Pricing
            </button>
          </li>
          <li>
            <button className="nav-link-btn" onClick={() => handleScroll("order-form")}>
              Order Now
            </button>
          </li>
        </ul>
      </nav>

      <Link to="/login" onClick={() => setMenuOpen(false)}>
        <button className="login-btn">Admin Login</button>
      </Link>
    </header>
  );
};

export default Header;
