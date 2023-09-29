import { TRAER_PRODUCTOS } from "./actions_types";
// import * as viewCaption from "../views/viewCaptions.js";

const initialState = {
	productosEnc: [],
	carrito: [],
	inicioSesion: false
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {

		case TRAER_PRODUCTOS:
			return { ...state,
				productosEnc: payload
			};

		default:
			return { ...state };
	};
};

export default rootReducer;