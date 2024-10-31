import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Products from "./components/products/Products";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="container">
        <Title subTitle="OUR SERVICES" title="What We Offer" />
        <Services />
        <About />
        <Title subTitle="PRODUCTS" title="Browse Our Products" />
        <Products />
      </div>
    </>
  );
}

export default App;
