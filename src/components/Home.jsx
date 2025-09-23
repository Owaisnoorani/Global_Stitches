import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Pricing from "./Pricing";
import OrderForm from "./OrderForm";   // 👈 add this

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />

      {/* Products Section */}
      <section className="products-section">
        <h2 className="products-heading">Logo Patches Collection</h2>
        <p className="products-subtext">
          Professional embroidered logo patches for businesses and organizations. <br />
          <span>Clothing Logos Collection:</span> Custom embroidered logos for apparel and clothing items.
        </p>

        {/* Products Grid */}
        <Products />

        {/* Pricing Section */}
        <Pricing />

        {/* Order Form Section */}
        <OrderForm />
      </section>
    </>
  );
};

export default Home;
