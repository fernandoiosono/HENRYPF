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
  TRAER_USUARIOS,
  USUARIO,
  EDITAR_USUARIO,
  CREAR_PRODUCTO,
  ACTUALIZAR_PRODUCTO,
  TRAER_ORDENES,
  ACTUALIZAR_ORDEN,
  FILTRAR_ORDEN,
  ACTUALIZAR_ADMIN,
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
  usuarios: [],
  allOrders: [],
  allOrder: [],
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
      let auxProducts = [...state.allProductos];

      auxProducts.map((producto) => {
        if (producto.idProduct === payload[1].idProduct) {
          producto.active = !producto.active;
        }
      });
      if (payload[0] === "eliminar") {
        Swal.fire("Eliminar producto", "Eliminado", "success");
      }

      return {
        ...state,
        allProductos: auxProducts,
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
        return {
          ...state,
        };
      } else {
        Swal.fire({
          title: "Usuario actualizado",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
        return {
          ...state,
          usuario: payload[0],
        };
      }

    case BUSCAR_PRUDUCTOS:
      const resultado = state.allProductos.filter((producto) =>
        producto.name.toLowerCase().includes(payload.toLowerCase())
      );

      if (resultado.length === 0) {
        Swal.fire("No se encontraron coincidencias", " ", "error");
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
      if (payload.length != 0) {
        let filteredProductos = [...state.allActiveProducts];
        const filteredProducts = filteredProductos.filter((producto) =>
          payload.some((category) =>
            producto.Category.idCategory.includes(category)
          )
        );
        return {
          ...state,
          productosMostrar: filteredProducts,
          currentPage: 1,
        };
      } else {
        return {
          ...state,
          productosMostrar: [...state.allActiveProducts],
          currentPage: 1,
        };
      }

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
      } else if (payload === "Relevancia") {
        return {
          ...state,
          productosMostrar: [...state.allActiveProducts],
        };
      } else if (
        payload === "CatNombreDescendente" ||
        payload === "CatNombreAscendente"
      ) {
        let orderedProductos = [...state.productosMostrar];
        let ordered;

        if (payload === "CatNombreAscendente") {
          ordered = orderedProductos.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
        } else if (payload === "CatNombreDescendente") {
          ordered = orderedProductos.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
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
        carrito: [payload, ...state.carrito],
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
      const carritoFilt = state.carrito.map((product) => {
        const quantity = payload.ShoppingCart.quantity;
        if (product.idProduct === payload.idProduct) {
          return { ...product, ShoppingCart: { quantity } };
        }
        return product;
      });
      return {
        ...state,
        carrito: carritoFilt,
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

    case TRAER_USUARIOS:
      return {
        ...state,
        usuarios: payload,
      };

    case ACTUALIZAR_ADMIN:
      let auxUsers = [...state.usuarios];

      auxUsers.map((user) => {
        if (user.idUser === payload) {
          user.isAdmin = user.isAdmin;
        }
      });

      return { ...state, usuarios: auxUsers };

    // let auxProducts = [...state.allProductos];

    // auxProducts.map((producto) => {
    //   if (producto.idProduct === payload[1].idProduct) {
    //     producto.active = !producto.active;
    //   }
    // });
    // if (payload[0] === "eliminar") {
    //   Swal.fire("Eliminar producto", "Eliminado", "success");
    // } else if (payload[0] === "desactivar") {
    //   Swal.fire("Actualizar producto", "Producto desactivado", "success");
    // } else if (payload[0] === "activar") {
    //   Swal.fire("Actualizar producto", "Producto activado", "success");
    // }

    // return {
    //   ...state,
    //   allProductos: auxProducts,
    // };

    case TRAER_ORDENES:
      return {
        ...state,
        allOrders: payload,
        allOrder: payload,
      };

    case ACTUALIZAR_ORDEN:
      let auxOrder = [...state.allOrders];
      auxOrder.map((order) => {
        if (order.idOrder === payload) {
          if (order.status === "PAID") {
            order.status = "DELIVERED";
          } else if (order.status === "DELIVERED") {
            order.status = "RECEIVED";
          }
        }
      });
      return { ...state, allOrders: auxOrder };
    case FILTRAR_ORDEN:
      [...state.allOrders] = [...state.allOrder];
      let auxOrderFilter = [...state.allOrders].filter(
        (item) => item.status === payload
      );

      return { ...state, allOrders: auxOrderFilter };

    // return {
    //   ...state,
    //   allOrders: payload,
    // };
    default:
      return { ...state };
  }
};

export default rootReducer;
