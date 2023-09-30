import axios from 'axios';
import { TRAER_PRODUCTOS, SET_PAGINA, BUSCAR_PRUDUCTOS } from "./actions_types";
import { useSelector } from 'react-redux';

const URL = 'http://localhost:3001/';
const allProductos = useSelector(state=>state.allProductos);

export const traerProductos = () => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get(`${URL}productos`);  //! VERIFICAR RUTA CON EL BACK
            return dispatch({
                type: TRAER_PRODUCTOS,
                payload: data
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
            const num = Number(nombre);
            if (!isNaN(num)) {
                const resultado = allProductos.filter(producto => producto.idProducto===num)
                return dispatch({
                    type: SET_PAGINA,
                    payload: resultado
                })
            } else {
                const resultado = allProductos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()))
                return dispatch({
                    type: SET_PAGINA,
                    payload: resultado
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
};
