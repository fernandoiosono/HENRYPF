import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemPedidos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faBox,
  faCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function ItemPedidos({ order }) {
  const { idOrder, UserIdUser, amount, status } = order;
  let contenido;
  let orderId;
  orderId = idOrder.slice(0, 5) + "..." + idOrder.slice(-5);

  const handleButtonSend = () => {
    alert("MARCADO COMO ENVIADO");
  };

  const handleButtonReceived = () => {
    alert("MARCADO COMO ENVIADO");
  };

  if (status === "PAID") {
    contenido = //El status es pagado y se tiene que enviar
      (
        <div
          role="button" // Añade un atributo de rol para indicar que es un botón
          onClick={handleButtonSend}
        >
          <FontAwesomeIcon
            icon={faTruckFast}
            style={{ color: "#0074e4" }}
            size="2xl"
          />
        </div>
      );
  } else if (status === "DELIVERED") {
    contenido = //El status es enviado y se tiene que marcar como recibido
      (
        <div
          role="button" // Añade un atributo de rol para indicar que es un botón
          onClick={handleButtonReceived}
        >
          {/* <FontAwesomeIcon
            icon={faBox}
            style={{ color: "#4caf50" }}
            size="xl"
          />{" "} */}
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "#4caf50" }}
            size="2xl"
          />
        </div>
      );
  } else {
    contenido = //Es el estado final
      (
        <div>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#ffd700" }}
            size="2xl"
          />
        </div>
      );
  }

  return (
    <div className="products-row">
      <div className="product-cell">
        <Link to={`/orden/${idOrder}`}>
          <span>{orderId}</span>
        </Link>
      </div>
      <div className="product-cell ">
        <span>{UserIdUser}</span>
      </div>
      <div className="product-cell">
        <span>{amount}</span>
      </div>

      <div className="product-cell">
        <span>{contenido}</span>
      </div>
    </div>
  );
}

export default ItemPedidos;
