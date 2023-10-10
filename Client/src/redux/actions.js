import axios from "axios";
import {
  TRAER_PRODUCTOS,
  TRAER_PRODUCTO,
  CREAR_PRODUCTO,
  BORRAR_PRODUCTO,
  ACTUALIZAR_PRODUCTO,
  TRAER_PRODUCTOS_ACTIVOS,
  SET_PAGINA,
  BUSCAR_PRUDUCTOS,
  OBTENER_CATEGORIAS,
  AGREGAR_CARRITO,
  QUITAR_CARRITO,
  SET_CANTIDAD_CARRITO,
  CARGAR_CARRITO,
  FILTER_CATEGORIA,
  SET_ORDER,
  SET_INICIO_SESION,
  USUARIO,
  EDITAR_USUARIO,
} from "./actions_types";

const URL = "http://localhost:3001/moveon/";

export const traerAllProductos = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL}products/all`);
      return dispatch({
        type: TRAER_PRODUCTOS,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (values) => {
  try {
    return async (dispatch) => {
      const response = await axios.post(`${URL}products`, values);
      if (response.status === 200) {
        return dispatch({
          type: CREAR_PRODUCTO,
          payload: true,
        });
      }
    };
  } catch (error) {
    console.log(error.message);
    return dispatch({
      type: CREAR_PRODUCTO,
      payload: false,
    });
  }
};

export const deleteProduct = (idProduct) => {
  try {
    return async (dispatch) => {
      const response = await axios.put(
        `${URL}products/${idProduct}?activate=false`
      );

      if (response.status === 200) {
        return dispatch({
          type: BORRAR_PRODUCTO,
          payload: true,
        });
      } else {
        return dispatch({
          type: BORRAR_PRODUCTO,
          payload: false,
        });
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const traerProducto = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL}products/${id}`);
      return dispatch({
        type: TRAER_PRODUCTO,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const actualizarProducto = (id, values) => {
  console.log(values);

  try {
    return async (dispatch) => {
      const response = await axios.patch(`${URL}products/${id}`, values);
      if (response.status === 200) {
        return dispatch({
          type: ACTUALIZAR_PRODUCTO,
          payload: true,
        });
      } else {
        return dispatch({
          type: ACTUALIZAR_PRODUCTO,
          payload: false,
        });
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const traerActiveProductos = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL}products/active`);
      return dispatch({
        type: TRAER_PRODUCTOS_ACTIVOS,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const setCurrenPage = (pagina) => {
  return (dispatch) => {
    return dispatch({
      type: SET_PAGINA,
      payload: pagina,
    });
  };
};

export const buscarPruductos = (nombre) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: BUSCAR_PRUDUCTOS,
        payload: nombre,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCategorias = () => {
  try {
    return async (dispatch) => {
      const categorias = await axios.get(`${URL}categories/all`);
      dispatch({
        type: OBTENER_CATEGORIAS,
        payload: categorias.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const filterByCategory = (categoria) => {
  return {
    type: FILTER_CATEGORIA,
    payload: categoria,
  };
};

export const setOrder = (orden) => {
  return {
    type: SET_ORDER,
    payload: orden,
  };
};

export const agregarCarrito = (producto) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: AGREGAR_CARRITO,
        payload: producto,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const quitarCarrito = (id) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: QUITAR_CARRITO,
        payload: id,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const setCantidadCarrito = (producto) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: SET_CANTIDAD_CARRITO,
        payload: producto,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const cargarCarrito = (idCliente) => {
  try {
    return async (dispatch) => {
      console.log('deberia cargar carrito', idCliente);
      const { data } = await axios.get(`${URL}moveon/shoppingcart/${idCliente}`)
      return dispatch({
        type: CARGAR_CARRITO,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const setInicioSesion = (booleano) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: SET_INICIO_SESION,
        payload: booleano,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuario = (newUsuario) => {
  try {
    return async (dispatch) => {
      const usuarioCreado = await axios.post(`http://localhost:3001/moveon/users/`, newUsuario);
      dispatch({
        type: USUARIO,
        payload: usuarioCreado
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuario = (cambiosUsuario) => {
  try {
    return async (dispatch) => {
      const editarUser = await axios.patch(`http://localhost:3001/moveon/users/`, cambiosUsuario);
      dispatch({
        type: EDITAR_USUARIO,
        payload: editarUser
      });
    };
  } catch (error) {
    console.log(error);
  }
};

