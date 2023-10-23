import React from "react";
import Filter from "../../components/Filter/Filter.jsx";
import Ordering from "../../components/Ordering/Ordering.jsx";
import "./Aside.css";
import { useLocation } from "react-router-dom";

const Aside = ({
  componente,
  mostrarVerProductosHandler,
  mostrarCrearProductosHandler,
  mostrarVerPedidos,
  mostrarVerUsuarios,
}) => {
  const location = useLocation();
  if (location.pathname === "/catalogoAdmin") {
    return (
      <aside className="admin">
        <button
          onClick={mostrarVerProductosHandler}
          className={componente === "VerProductos" ? "active" : ""}
        >
          Ver Productos
        </button>
        <button
          onClick={mostrarCrearProductosHandler}
          className={componente === "CrearProductos" ? "active" : ""}
        >
          Crear Productos
        </button>
        <button
          onClick={mostrarVerPedidos}
          className={componente === "VerPedidos" ? "active" : ""}
        >
          Ver Pedidos
        </button>
        <button
          onClick={mostrarVerUsuarios}
          className={componente === "VerUsuarios" ? "active" : ""}
        >
          Ver Usuarios
        </button>
      </aside>
    );
  } else {
    return (
      <aside className="catalogo">
        <Filter />
        {/* <Ordering /> */}
      </aside>
    );
  }
};

export default Aside;
