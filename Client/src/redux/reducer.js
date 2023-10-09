import Swal from "sweetalert2";
import {
  TRAER_PRODUCTOS,
  TRAER_PRODUCTO,
  TRAER_PRODUCTOS_ACTIVOS,
  BORRAR_PRODUCTO,
  SET_PAGINA,
  BUSCAR_PRUDUCTOS,
  OBTENER_CATEGORIAS,
  FILTER_CATEGORIA,
  AGREGAR_CARRITO,
  QUITAR_CARRITO,
  SET_ORDER,
  SET_INICIO_SESION,
  CREAR_PRODUCTO,
  ACTUALIZAR_PRODUCTO,
} from "./actions_types";

const initialState = {
  allProductos: [],
  productosMostrar: [],
  producto: [],
  borrado: false,
  allActiveProducts: [],
  productosEnc: [],
  carrito: [],
  inicioSesion: false,
  currentPage: 1,
  itemsPerPage: 9,
  categorias: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TRAER_PRODUCTOS:
      return {
        ...state,
        allProductos: payload,
        producto: [],
      };

    case TRAER_PRODUCTOS_ACTIVOS:
      return {
        ...state,
        productosMostrar: payload,
        allActiveProducts: payload,
      };

    case CREAR_PRODUCTO:
      if (payload != true) {
        Swal.fire("Crear producto", "Error al crear el producto", "error");
      } else {
        Swal.fire("Creado!", "El producto fue creado.", "success");
      }
      return {
        ...state,
      };
    case BORRAR_PRODUCTO:
      console.log(payload);
      if (payload != true) {
        Swal.fire(
          "Eliminar producto",
          "Error al eliminar el producto",
          "error"
        );
      } else {
        Swal.fire("Eliminar producto", "Eliminado", "success");
      }
      return {
        ...state,
      };

    case ACTUALIZAR_PRODUCTO:
      console.log(payload);
      if (payload != true) {
        Swal.fire(
          "Actualizar producto",
          "Error al actualizar el producto",
          "error"
        );
      } else {
        Swal.fire("Actualizar producto", "Actualizado", "success");
      }
      return {
        ...state,
      };

    case TRAER_PRODUCTO:
      return {
        ...state,
        producto: payload,
      };

    case SET_PAGINA:
      return {
        ...state,
        currentPage: payload,
      };

    case BUSCAR_PRUDUCTOS:
      const resultado = state.allProductos.filter((producto) =>
        producto.name.toLowerCase().includes(payload.toLowerCase())
      );

      if (resultado.length === 0) {
        alert("No se encontraron coincidencias");
        return {
          ...state,
        };
      }
      return {
        ...state,
        productosMostrar: resultado,
      };

    case OBTENER_CATEGORIAS:
      return {
        ...state,
        categorias: payload,
      };

    case FILTER_CATEGORIA:
      let filteredProductos = [...state.allActiveProducts];
      let filter;
      filter = filteredProductos.filter((producto) =>
        producto.Category.name.includes(payload)
      );
      return {
        ...state,
        productosMostrar: filter,
        currentPage: 1,
      };

    case SET_ORDER:
      let orderedProductos = [...state.productosMostrar];
      let ordered;
      if (payload === "Ascendente") {
        ordered = orderedProductos.sort((a, b) => a.price - b.price);
      } else if (payload === "Descendente") {
        ordered = orderedProductos.sort((a, b) => b.price - a.price);
      } else {
        ordered = orderedProductos;
      }
      return {
        ...state,
        productosMostrar: ordered,
      };

    case AGREGAR_CARRITO:
      return {
        ...state,
        carrito: [...state.carrito, payload],
      };

    case QUITAR_CARRITO:
      const carritoFiltrado = state.carrito.filter(
        (productos) => productos.idProduct !== payload
      );
      return {
        ...state,
        carrito: carritoFiltrado,
      };

    case SET_INICIO_SESION:
      return {
        ...state,
        inicioSesion: payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
