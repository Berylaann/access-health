import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Partners from "./components/partners/Partners";
import Users from "./components/users/Users";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="container">
        <Title subTitle="OUR SERVICES" title="What We Offer" />
        <Services />
        <About />
        <Title subTitle="OUR PRODUCTS" title="Browse Our Products" />
        <Products />
        <Title subTitle="OUR PARTNERS" title="What Our Partners Say" />
        <Partners />
        <Title subTitle="OUR USERS" title="Access The Nearest Help" />
        <Users />
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact/>
      </div>
    </>
  );
}

export default App;
