import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="container">
      <Services />
      </div>
    </>
  );
}

export default App;
