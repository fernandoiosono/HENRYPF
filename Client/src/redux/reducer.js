import {
  TRAER_PRODUCTOS,
  SET_PAGINA,
  BUSCAR_PRUDUCTOS,
  OBTENER_CATEGORIAS,
  FILTER_CATEGORIA,
  SET_ORDER,
} from "./actions_types";
// import * as viewCaption from "../views/viewCaptions.js";

const initialState = {
  allProductos: [],
  productosMostrar: [],
  productosEnc: [],
  carrito: [],
  inicioSesion: true,
  pagina: 1,
  categorias: [
    //Borrar estos datos cuando se tenga conexion con el Backend
    {
      id: 1,
      name: "Nutricion deportiva",
    },
    {
      id: 2,
      name: "Proteina",
    },
    {
      id: 3,
      name: "Aminoacidos",
    },
    {
      id: 4,
      name: "Equipamiento",
    },
  ],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TRAER_PRODUCTOS:
      return {
        ...state,
        allProductos: payload,
        productosMostrar: payload,
      };

    case SET_PAGINA:
      return {
        ...state,
        pagina: payload,
      };

    case BUSCAR_PRUDUCTOS:
      return {
        ...state,
        productosEnc: payload,
      };

    case OBTENER_CATEGORIAS:
      return {
        ...state,
        categorias: payload,
      };

    case FILTER_CATEGORIA:
      let filteredProductos = [...state.allProductos];
      let filter;
      filter = filteredProductos.filter((producto) =>
        producto.categoria.includes(payload)
      );
      return {
        ...state,
        productosMostrar: filter,
      };

    case SET_ORDER:
      let orderedProductos = [...state.productosMostrar];
      let ordered;
      if (payload === "Ascendente") {
        ordered = orderedProductos.sort((a, b) => a.precio - b.precio);
      } else if (payload === "Descendente") {
        ordered = orderedProductos.sort((a, b) => b.precio - a.precio);
      } else {
        ordered = orderedProductos;
      }
      return {
        ...state,
        productosMostrar: ordered,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
