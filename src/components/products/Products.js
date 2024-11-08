import React from 'react';
import "./Products.css";
import product_img1 from "../../assets/product_img1.png";
import product_img2 from "../../assets/product_img2.jpeg";
import product_img3 from "../../assets/product_img3.png";
import product_img4 from "../../assets/product_img4.png";
import Button from "../button/Button";

function Products() {
  return (
    <div className="products">
      <div className="product-img">
        <img src={product_img1} alt="product image1" />
        <img src={product_img2} alt="product image2" />
        <img src={product_img3} alt="product image3" />
        <img src={product_img4} alt="product image4" />
      </div>
      <Button
        text="Order here"
        buttonBackground="#0b5504"
        buttonColor="#fef9f9"
      />
    </div>
  );
}

export default Products;
