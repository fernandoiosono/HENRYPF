import React, { useState, useEffect } from "react";
// import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions.js";
import ItemUsuarios from "../ItemUsuarios/ItemUsuarios.jsx";

function ListUsuarios() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usuarios);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <div className="products-area-wrapper tableView">
            <div className="products-header">
              <div className="product-cell "></div>
              <div className="product-cell ">Email</div>
              <div className="product-cell category">Nombre</div>
              <div className="product-cell status-cell">Nickname</div>
              <div className="product-cell stock">Administrador</div>
            </div>
            {users.length > 0
              ? users.map((user, index) => (
                  <ItemUsuarios key={index} index={index} user={user} />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListUsuarios;
