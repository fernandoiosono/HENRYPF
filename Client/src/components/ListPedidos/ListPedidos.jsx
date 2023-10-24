import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setOrder, getOrders } from "../../redux/actions.js";
import ItemPedidos from "../ItemPedidos/ItemPedidos.jsx";
import Swal from "sweetalert2";

function ListPedidos() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);
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
            </div>
            {orders.length > 0
              ? orders.map((order, index) => (
                  <ItemPedidos key={index} index={index} order={order} />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPedidos;
