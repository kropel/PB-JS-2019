import React from "react";

const Product = ({
  id,
  name,
  image,
  manufacture,
  amount,
  category,
  featured
}) => (
  <div className="product">
    <img src={image} alt={name} />
    <p className="price">${amount}</p>
    <h3>{name}</h3>
  </div>
);

export default Product;
