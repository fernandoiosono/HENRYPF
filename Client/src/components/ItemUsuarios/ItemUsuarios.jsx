import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "./ItemUsuarios.css";

function ItemUsuarios({ user, handleActiveProduct }) {
  const { imageURL, idUser, email, name, nickName, isAdmin } = user;

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
          <div
            className="buttonEliminar"
            role="button" // Añade un atributo de rol para indicar que es un botón
            onClick={() => {
              handleActiveProduct(user);
            }}
          >
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ color: "#000" }}
              size="lg"
            />
          </div>
        ) : (
          <div
            className="buttonEliminar"
            role="button" // Añade un atributo de rol para indicar que es un botón
            onClick={() => {
              handleActiveProduct(user);
            }}
          >
            <FontAwesomeIcon
              icon={faSquare}
              style={{ color: "#000" }}
              size="lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemUsuarios;
