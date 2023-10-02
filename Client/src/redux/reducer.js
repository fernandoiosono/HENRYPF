import { TRAER_PRODUCTOS, SET_PAGINA, BUSCAR_PRUDUCTOS, AGREGAR_CARRITO, QUITAR_CARRITO } from "./actions_types";
// import * as viewCaption from "../views/viewCaptions.js";

const initialState = {
	allProductos: [],
	productosEnc: [],
	carrito: [],
	inicioSesion: false,
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
			const num = Number(payload);
			if (!isNaN(num)) {
				const productoEncontrado = state.allProductos.find(prod=>prod.idProducto===num);
				if (!productoEncontrado) alert(`No existe el producto con el ID: ${num}`)
				return {
					...state,
					productosEnc: [productoEncontrado]
				};
			} else {
				const resultado = state.allProductos.filter(producto => producto.nombre.toLowerCase().includes(payload.toLowerCase()));
				return {
					...state,
					productosEnc: resultado
				};
			}

		case AGREGAR_CARRITO:
			return {
				...state,
				carrito: [...state.carrito, payload]
			};

		case QUITAR_CARRITO:
			const carritoFiltrado = state.carrito.filter(productos=>productos.idProducto!==payload);
			return {
				...state,
				carrito: carritoFiltrado
			};

		default:
			return { ...state };
	};
};

export default rootReducer;