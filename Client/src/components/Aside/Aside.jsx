// import React from "react";
// import "./Aside.css";

// const Aside = () => {
//   return (
//     <aside>
//       <button>Ver productos</button>
//       <button>Crear productos</button>
//     </aside>
//   );
// };

// export default Aside;

import React from "react";
import "./Aside.css";

const Aside = ({
  mostrarVerProductos,
  mostrarVerProductosHandler,
  mostrarCrearProductosHandler,
}) => {
  return (
    <aside>
      <button
        onClick={mostrarVerProductosHandler}
        className={mostrarVerProductos ? "active" : ""}
      >
        Ver Productos
      </button>
      <button
        onClick={mostrarCrearProductosHandler}
        className={!mostrarVerProductos ? "active" : ""}
      >
        Crear Productos
      </button>
    </aside>
  );
};

export default Aside;
