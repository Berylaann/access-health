import React from "react";
import "./Products.css";
import product_img1 from "../../assets/product-img1.png";
import product_img2 from "../../assets/product-img2.png";
import product_img3 from "../../assets/product-img3.png";
import product_img4 from "../../assets/product-img4.png";
import Button from "../button/Button";
import Title from "../title/Title";

function Products() {
  return (
    <section id="products">
      <Title subTitle="OUR PRODUCTS" title="Shop our products" />
      <div className="products">
        <div className="product-img">
          <img src={product_img1} alt="lifestraw go filter" />
          <img src={product_img2} alt="lifestraw community filter" />
          <img src={product_img3} alt="lifestraw family filter" />
          <img src={product_img4} alt="lifestraw max filter" />
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
