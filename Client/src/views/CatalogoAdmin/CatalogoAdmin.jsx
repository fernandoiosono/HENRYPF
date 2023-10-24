import React, { useState, useEffect } from "react";
import List from "../../components/List/List";
import ListPedidos from "../../components/ListPedidos/ListPedidos";
import ListUsuarios from "../../components/ListUsuarios/ListUsuarios";
import CrearProducto from "../../components/CrearProducto/CrearProducto";
import PaginationAdmin from "../../components/PaginationAdmin/PaginationAdmin";
import Aside from "../../components/Aside/Aside";
import { setCurrenPage } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import "./CatalogoAdmin.css";

const CatalogoAdmin = () => {
  const dispatch = useDispatch();

  dispatch(setCurrenPage(1));
  const [componente, setComponente] = useState("VerProductos");

  const mostrarVerProductosHandler = () => {
    setComponente("VerProductos");
  };

  const mostrarCrearProductosHandler = () => {
    setComponente("CrearProductos");
  };

  const mostrarVerPedidos = () => {
    setComponente("VerPedidos");
  };
  const mostrarVerUsuarios = () => {
    setComponente("VerUsuarios");
  };

  return (
    <>
      <div className="main-container">
        <Aside
          componente={componente}
          mostrarVerProductosHandler={mostrarVerProductosHandler}
          mostrarCrearProductosHandler={mostrarCrearProductosHandler}
          mostrarVerPedidos={mostrarVerPedidos}
          mostrarVerUsuarios={mostrarVerUsuarios}
        />
        {componente === "VerProductos" ? (
          <List />
        ) : componente === "CrearProductos" ? (
          <CrearProducto />
        ) : componente === "VerPedidos" ? (
          <ListPedidos />
        ) : (
          <ListUsuarios />
        )}
      </div>
      {componente != "VerUsuarios" &&
      componente != "CrearProductos" &&
      componente != "VerPedidos" ? (
        <PaginationAdmin />
      ) : null}
    </>
  );
};

export default CatalogoAdmin;
