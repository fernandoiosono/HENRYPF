import React from "react";
import "./Aside.css";

const Aside = ({
  componente,
  mostrarVerProductosHandler,
  mostrarCrearProductosHandler,
  mostrarVerPedidos,
  mostrarVerUsuarios,
}) => {
  return (
    <aside>
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
};

export default Aside;
