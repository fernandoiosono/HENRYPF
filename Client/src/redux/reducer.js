import { TRAER_PRODUCTOS, SET_PAGINA, BUSCAR_PRUDUCTOS } from "./actions_types";
// import * as viewCaption from "../views/viewCaptions.js";

const initialState = {
	allProductos: [],
	productosEnc: [],
	carrito: [],
	inicioSesion: true,
	pagina: 1
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {

		case TRAER_PRODUCTOS:
			return {
				...state,
				allProductos: payload
			};

		case SET_PAGINA:
			return {
				...state,
				pagina: payload
			};

		case BUSCAR_PRUDUCTOS:
			return {
				...state,
				productosEnc: payload
			};

		default:
			return { ...state };
	};
};

export default rootReducer;