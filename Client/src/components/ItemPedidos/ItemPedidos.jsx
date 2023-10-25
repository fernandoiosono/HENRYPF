import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemPedidos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faCheck,
  faStar,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

function ItemPedidos({ order, handleButtonReceived, handleButtonSend }) {
  const { idOrder, UserIdUser, amount, status } = order;
  let contenido;
  let orderId;
  orderId = idOrder.slice(0, 5) + "..." + idOrder.slice(-5);

  if (status === "PAID") {
    contenido = //El status es pagado y se tiene que enviar
      (
        <div
          className="divPedidos"
          role="button"
          onClick={() => {
            handleButtonSend(idOrder, "SEND");
          }}
          style={{ color: "#0074e4", cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faTruckFast} size="2xl" />
          {" Enviar"}
        </div>
      );
  } else if (status === "DELIVERED") {
    contenido = //El status es enviado y se tiene que marcar como recibido
      (
        <div
          className="divPedidos"
          role="button"
          onClick={() => {
            handleButtonReceived(idOrder, "RECEIVED");
          }}
          style={{ color: "#4caf50", cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faCheck} size="2xl" />
          {" Recibir"}
        </div>
      );
  } else {
    contenido = //Es el estado final
      (
        <div
          className="divPedidos"
          style={{
            color: "#ccac00",
            cursor: "not-allowed",
          }}
        >
          <FontAwesomeIcon icon={faStar} size="2xl" />
          {" Completo"}
        </div>
      );
  }

  return (
    <div className="products-row">
      <div className="product-cell">
        {/* <Link to={`/orden/${idOrder}`}> */}
        <span>{orderId}</span>
        {/* </Link> */}
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
      <div className="product-cell">
        <Link to={`/orden/${idOrder}`}>
          <FontAwesomeIcon
            icon={faCircleInfo}
            style={{ color: "#000" }}
            size="2xl"
          />
        </Link>
      </div>
    </div>
  );
}

export default ItemPedidos;
