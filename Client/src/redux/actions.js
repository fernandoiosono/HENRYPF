import axios from 'axios';
import { TRAER_PRODUCTOS } from "./actions_types";

const URL = 'http://localhost:3001/';

export const traerProductos = (nombre) => {
    try {
        return async (dispatch) => {
            const aNumero = Number(nombre);

            if (!isNaN(aNumero)) {
                const { data } = await axios.get(`${URL}productos/${aNumero}`);  //! VERIFICAR RUTA CON EL BACK
                return dispatch({
                    type: TRAER_PRODUCTOS,
                    payload: data
                })
            } else {
                const { data } = await axios.get(`${URL}productos/nombre/${nombre}`);  //! VERIFICAR RUTA CON EL BACK
                return dispatch({
                    type: TRAER_PRODUCTOS,
                    payload: data
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
};
