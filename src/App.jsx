import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./components/AboutUs";
import LoginSignup from "./components/LoginSignup"; 
import Footer from "./components/Footer";  
import Designs from "./components/Designs";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginSignup />} /> 
      </Routes>

      <Footer /> 
    </>
  );
};

export default App;
