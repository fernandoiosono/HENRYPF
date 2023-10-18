import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemPedidos.css";

function ItemPedidos({ user, handleDeleteProduct, handleActiveProduct }) {
  const { imageURL, idUser, email, name, nickName, isAdmin } = user;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="products-row">
      <div className="product-cell ">
        <img className="userImage" src={imageURL} />
      </div>
      <div className="product-cell ">
        <span>{email}</span>
      </div>
      <div className="product-cell">
        <span>{name}</span>
      </div>
      <div className="product-cell ">{nickName}</div>
      <div className="product-cell ">
        {isAdmin ? (
          <input
            onChange={handleCheckboxChange}
            onClick={() => {
              handleActiveProduct(idUser, isAdmin);
            }}
            type="checkbox"
            id="scales"
            name="scales"
            checked
          />
        ) : (
          <input
            onChange={handleCheckboxChange}
            onClick={() => {
              handleActiveProduct(idUser, isAdmin);
            }}
            type="checkbox"
            id="scales"
            name="scales"
            checked={isChecked}
          />
        )}
      </div>
    </div>
  );
}

export default ItemPedidos;
