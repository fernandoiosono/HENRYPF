import React from "react";
import "./Producto.css";

const Producto = (producto) => {
  const { imageURL, name, shoppingCart } = producto.producto;

  return (
    <div className="products-row">
      <div className="product-cell">
        <span>{shoppingCart.quantity}</span>
      </div>
      <div className="product-cell ">
        <img className="imgDetail" src={imageURL} alt={name} />
      </div>
      <div className="product-cell">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Producto;
