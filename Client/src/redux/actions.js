import axios from 'axios';
import { TRAER_PRODUCTOS, SET_PAGINA, BUSCAR_PRUDUCTOS, AGREGAR_CARRITO, QUITAR_CARRITO } from "./actions_types";
import { useSelector } from 'react-redux';

const URL = 'http://localhost:3001/';

export const traerProductos = (productos) => {
    try {
        return async (dispatch) => {
            //const { data } = await axios.get(`${URL}productos`);  //! VERIFICAR RUTA CON EL BACK
            return dispatch({
                type: TRAER_PRODUCTOS,
                payload: productos
            })
        }
    } catch (error) {
        console.log(error);
    }
};

export const setPagina = (pagina) => {
    try {
        return (dispatch) => {
            return dispatch({
                type: SET_PAGINA,
                payload: pagina
            })
        }
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
