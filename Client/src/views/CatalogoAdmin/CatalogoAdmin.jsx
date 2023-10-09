import React, { useState, useEffect } from "react";
import List from "../../components/List/List";
import CrearProducto from "../../components/CrearProducto/CrearProducto";
import PaginationAdmin from "../../components/PaginationAdmin/PaginationAdmin";
import Aside from "../../components/Aside/Aside";
import { setCurrenPage, traerAllProductos } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import "./CatalogoAdmin.css";

const CatalogoAdmin = () => {
  useEffect(() => {
    dispatch(traerAllProductos());
  }),
    [];
  const dispatch = useDispatch();
  dispatch(setCurrenPage(1));
  const [mostrarVerProductos, setMostrarVerProductos] = useState(false); // Nuevo estado para controlar qué componente mostrar

  const mostrarVerProductosHandler = () => {
    setMostrarVerProductos(true);
  };

  const mostrarCrearProductosHandler = () => {
    setMostrarVerProductos(false);
  };

  return (
    <>
      <div className="main-container">
        <Aside
          mostrarVerProductos={mostrarVerProductos}
          mostrarVerProductosHandler={mostrarVerProductosHandler}
          mostrarCrearProductosHandler={mostrarCrearProductosHandler}
        />
        {!mostrarVerProductos ? (
          <CrearProducto /> // Renderiza el componente CrearProductos cuando mostrarVerProductos es falso
        ) : (
          <List />
        )}
      </div>
      {mostrarVerProductos ? <PaginationAdmin /> : null}
    </>
  );
};

export default CatalogoAdmin;
