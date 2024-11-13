import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Partners from "./components/partners/Partners";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experts from "./components/experts/Experts";


function App() {
  return (
    <section>
      <Navbar />
      <Home />
      <div className="container">
        <Services />
        <About />
        <Products />
        <Partners />
        <Experts/>
        <Contact />
        <Footer/>
      </div>
    </section>
  );
}

export default App;
