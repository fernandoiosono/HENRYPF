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
  SET_CANTIDAD_CARRITO,
  CARGAR_CARRITO,
  SET_ORDER,
  SET_INICIO_SESION,
  USUARIO,
  EDITAR_USUARIO,
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
  usuario: [],
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
      if (payload != true) {
        Swal.fire(
          "Actualizar producto",
          "Error al actualizar el producto",
          "error"
        );
      } else {
        Swal.fire({
          title: "Producto actualizado",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
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

    case USUARIO:
      return {
        ...state,
        usuario: payload,
      };

    case EDITAR_USUARIO:
      if (payload[1] != true) {
        Swal.fire(
          "Actualizar usuario",
          "Error al actualizar el usuario",
          "error"
        );
      } else {
        Swal.fire({
          title: "Usuario actualizado",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
      }return {
        ...state,
        usuario: payload[0],
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
      if (payload === "Descendente" || payload === "Ascendente") {
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
      } else {
        let orderedProductos = [...state.allProductos];
        let ordered;

        if (payload === "NombreDescendente") {
          ordered = orderedProductos.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        } else if (payload === "NombreAscendente") {
          ordered = orderedProductos.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
        }

        if (payload === "CategoriaDescendente") {
          ordered = orderedProductos.sort((a, b) => {
            return a.Category.name.localeCompare(b.Category.name);
          });
        } else if (payload === "CategoriaAscendente") {
          ordered = orderedProductos.sort((a, b) => {
            return b.Category.name.localeCompare(a.name);
          });
        }

        if (payload === "estadoDescendente") {
          ordered = orderedProductos.sort((a, b) => {
            return a.active - b.active;
          });
        } else if (payload === "estadoAscendente") {
          ordered = orderedProductos.sort((a, b) => {
            return b.active - a.active;
          });
        }

        if (payload === "stockDescendente") {
          ordered = orderedProductos.sort((a, b) => {
            return a.stock - b.stock;
          });
        } else if (payload === "stockAscendente") {
          ordered = orderedProductos.sort((a, b) => {
            return b.stock - a.stock;
          });
        }

        if (payload === "precioDescendente") {
          ordered = orderedProductos.sort((a, b) => {
            return a.price - b.price;
          });
        } else if (payload === "precioAscendente") {
          ordered = orderedProductos.sort((a, b) => {
            return b.price - a.price;
          });
        }
        return {
          ...state,
          allProductos: ordered,
        };
      }

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

    case SET_CANTIDAD_CARRITO:
      const carritoFil = state.carrito.filter(producto => producto.idProduct !== payload.idProduct);
      carritoFil.push(payload)
      return {
        ...state,
        carrito: carritoFil,
      };

    case CARGAR_CARRITO:
      return {
        ...state,
        carrito: payload,
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
