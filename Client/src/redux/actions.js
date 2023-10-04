
import axios from "axios";
import {
  TRAER_PRODUCTOS,
  SET_PAGINA,
  BUSCAR_PRUDUCTOS,
  OBTENER_CATEGORIAS,
  AGREGAR_CARRITO,
  QUITAR_CARRITO,
  FILTER_CATEGORIA,
  SET_ORDER,
  SET_INICIO_SESION
} from "./actions_types";
import productos from "../../../productos.json";

const URL = "http://localhost:3001/";


export const traerProductos = () => {
  try {
    return async (dispatch) => {
      // const { data } = await axios.get(`${URL}productos`);  //! VERIFICAR RUTA CON EL BACK
      const data = productos;
      return dispatch({
        type: TRAER_PRODUCTOS,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }

};

export const setPagina = (pagina) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: SET_PAGINA,
        payload: pagina,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const buscarPruductos = (nombre) => {
    try {
        return (dispatch) => {
            return dispatch({
                type: BUSCAR_PRUDUCTOS,
                payload: nombre
            })
        }
    } catch (error) {
        console.log(error);
    }
};

export const obtenerCategorias = () => {
  try {
    return async (dispatch) => {
      const categorias = await axios.get(`${URL}/categorias`); //! VERIFICAR RUTA CON EL BACK
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
    try {
        return (dispatch) => {
            return dispatch({
                type: BUSCAR_PRUDUCTOS,
                payload: nombre
            })
        }
    } catch (error) {
        console.log(error);
    }
};

export const agregarCarrito = (producto) => {
    try {
        return (dispatch) => {
            return dispatch({
                type: AGREGAR_CARRITO,
                payload: producto
            })
        }
    } catch (error) {
        console.log(error);
    }
};

export const quitarCarrito = (id) => {
    try {
        return (dispatch) => {
            return dispatch({
                type: QUITAR_CARRITO,
                payload: id
            })
        }
    } catch (error) {
        console.log(error);
    }
};

export const setInicioSesion = (booleano) => {
  try {
      return (dispatch) => {
          return dispatch({
              type: SET_INICIO_SESION,
              payload: booleano
          })
      }
  } catch (error) {
      console.log(error);
  }
};
