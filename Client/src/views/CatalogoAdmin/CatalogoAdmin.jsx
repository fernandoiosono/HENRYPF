import React, { useState } from "react";
import List from "../../components/List/List";
import CrearProducto from "../../components/CrearProducto/CrearProducto";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination/pagination.components.jsx";
import Aside from "../../components/Aside/Aside";
import "./CatalogoAdmin.css";

const CatalogoAdmin = () => {
  const traerProductos = useSelector((state) => state.productosMostrar);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardForPage] = useState(15);
  const [mostrarVerProductos, setMostrarVerProductos] = useState(false); // Nuevo estado para controlar qué componente mostrar
  const ultimoIndiceProducto = currentPage * cardForPage;
  const primerIndiceProducto = ultimoIndiceProducto - cardForPage;
  const currentProductos = traerProductos.slice(
    primerIndiceProducto,
    ultimoIndiceProducto
  );

  const paged = function (pageNumber) {
    setCurrentPage(pageNumber);
  };

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
          <List productos={currentProductos} />
        )}
      </div>
      {mostrarVerProductos ? (
        <Pagination
          cardForPage={cardForPage}
          productos={traerProductos.length}
          paged={paged}
        />
      ) : null}
    </>
  );
};

export default CatalogoAdmin;
