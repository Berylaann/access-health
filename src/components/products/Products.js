import React from 'react';
import "./Products.css";
import product_img1 from "../../assets/product-img1.png";
import product_img2 from "../../assets/product-img2.png";
import product_img3 from "../../assets/product-img3.png";
import product_img4 from "../../assets/product-img4.png";
import Button from "../button/Button";
import Title from '../title/Title';

function Products() {
  return (
    <section id="products">
      <Title subTitle="OUR PRODUCTS" title="Shop our products"/>
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
    </section>
  );
}

export default Products;
