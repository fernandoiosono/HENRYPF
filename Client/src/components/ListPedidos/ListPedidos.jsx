import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, patchOrders } from "../../redux/actions.js";
import ItemPedidos from "../ItemPedidos/ItemPedidos.jsx";
import Swal from "sweetalert2";

function ListPedidos() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrders);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = 10;
  const ultimoIndiceProducto = currentPage * itemsPerPage;
  const primerIndiceProducto = ultimoIndiceProducto - itemsPerPage;
  const productsToShow = orders.slice(
    primerIndiceProducto,
    ultimoIndiceProducto
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleButtonSend = (idOrder, status) => {
    Swal.fire({
      title: "¿Deseas cambiar el estado a enviado?",
      text: "No se puede volver al estado anterior",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3005d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cambiar estado",
    }).then((result) => {
      if (result.value) {
        dispatch(patchOrders(idOrder, status));
      }
    });
  };

  const handleButtonReceived = (idOrder, status) => {
    Swal.fire({
      title: "¿Deseas cambiar el estado a recibido?",
      text: "No se puede volver al estado anterior",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3005d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cambiar estado",
    }).then((result) => {
      if (result.value) {
        dispatch(patchOrders(idOrder, status));
      }
    });
  };

  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <div className="products-area-wrapper tableView">
            <div className="products-header">
              <div className="product-cell ">Id Order</div>
              <div className="product-cell ">Nickname</div>
              <div className="product-cell status-cell">Monto</div>
              <div className="product-cell stock">Estado</div>
              <div className="product-cell stock">Mas Detalles</div>
            </div>
            {productsToShow.length > 0
              ? productsToShow.map((order, index) => (
                  <ItemPedidos
                    key={index}
                    index={index}
                    order={order}
                    handleButtonReceived={handleButtonReceived}
                    handleButtonSend={handleButtonSend}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPedidos;
