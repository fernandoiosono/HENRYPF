import axios from "axios";
import {
  TRAER_PRODUCTOS,
  SET_PAGINA,
  BUSCAR_PRUDUCTOS,
  OBTENER_CATEGORIAS,
  FILTER_CATEGORIA,
  SET_ORDER,
} from "./actions_types";
import { useSelector } from "react-redux";
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
      const allProductos = useSelector((state) => state.allProductos);
      const num = Number(nombre);
      if (!isNaN(num)) {
        const resultado = allProductos.filter(
          (producto) => producto.idProducto === num
        );
        return dispatch({
          type: SET_PAGINA,
          payload: resultado,
        });
      } else {
        const resultado = allProductos.filter((producto) =>
          producto.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
        return dispatch({
          type: SET_PAGINA,
          payload: resultado,
        });
      }
    };
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
};
