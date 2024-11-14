import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Partners from "./components/partners/Partners";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experts from "./components/experts/Experts";
import Video from "./components/video/Video";


function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <section>
      <Navbar />
      <Home />
      <div className="container">
        <Services />
        <About setPlayState={setPlayState} />
        <Products />
        <Partners />
        <Experts/>
        <Contact />
        <Footer/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </section>
  );
}

export default App;
