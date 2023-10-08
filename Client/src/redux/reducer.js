import {
  TRAER_PRODUCTOS,
  SET_PAGINA,
  BUSCAR_PRUDUCTOS,
  OBTENER_CATEGORIAS,
  FILTER_CATEGORIA,
  AGREGAR_CARRITO,
  QUITAR_CARRITO,
  SET_ORDER,
  SET_INICIO_SESION,
} from "./actions_types";

const initialState = {
  allProductos: [],
  productosMostrar: [],
  productosEnc: [],
  carrito: [
    {
      "idProducto": 1,
      "nombre": "Proteinas Whey",
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_852919-MLA47323183798_092021-O.webp",
      "descripcion": "Este tipo de suplemento ayuda a complementar la alimentación de personas con objetivos o requerimientos nutricionales específicos. Su consumo puede ser indicado por diversos factores, como la duración y la intensidad de la actividad física, el tipo de deporte, el ambiente en el que se practica, la edad, la composición corporal, el peso, entre otros. Es importante resaltar que su uso debe estar acompañado por una alimentación equilibrada y hábitos de vida saludable. La principal función de las proteínas es contribuir con la regeneración muscular. Es por esto que los suplementos proteicos suelen ser utilizados en ciertas circunstancias, por ejemplo ante el aumento de la intensidad del ejercicio, la recuperación luego de una lesión o para complementar la alimentación de personas veganas y vegetarianas. Algunos de los beneficios son: su consumo fácil, su bajo contenido en azúcares y grasas y la posible reducción del apetito.",
      "precio": 28,
      "stock": 50,
      "descuento": 0
    },
    {
      "idProducto": 2,
      "nombre": "Suplemento en polvo Star Nutrition Creatine Monohydrate creatina en pote de 300g",
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_705680-MLA48462687556_122021-O.webp",
      "descripcion": "La creatina es uno de los complementos deportivos más conocidos y su principal objetivo es fortalecer el tejido muscular. Es producida de forma natural por el cuerpo y está presente en alimentos como el pescado, la carne, los lácteos y el huevo. Su consumo a través de suplementos puede contribuir a un mayor rendimiento en actividades físicas que requieran intervalos de fuerza cortos e intensos, como el levantamiento de pesas y otros deportes de alto desgaste que requieren una recuperación más rápida.",
      "precio": 61,
      "stock": 50,
      "descuento": 20
    }
  ],
  inicioSesion: false,
  currentPage: 1,
  itemsPerPage: 9,
  categorias: [
    //Borrar estos datos cuando se tenga conexion con el Backend
    {
      id: 1,
      name: "Nutricion deportiva",
    },
    {
      id: 2,
      name: "Proteina",
    },
    {
      id: 3,
      name: "Aminoacidos",
    },
    {
      id: 4,
      name: "Equipamiento",
    },
  ],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TRAER_PRODUCTOS:
      return {
        ...state,
        allProductos: payload,
        productosMostrar: payload,
      };

    case SET_PAGINA:
      return {
        ...state,
        currentPage: payload,
      };

    case BUSCAR_PRUDUCTOS:
      const num = Number(payload);
      if (!isNaN(num)) {
        const productoEncontrado = state.allProductos.find(
          (prod) => prod.idProducto === num
        );
        if (!productoEncontrado)
          alert(`No existe el producto con el ID: ${num}`);
        return {
          ...state,
          productosEnc: [productoEncontrado],
          productosMostrar: [productoEncontrado],
        };
      } else {
        const resultado = state.allProductos.filter((producto) =>
          producto.nombre.toLowerCase().includes(payload.toLowerCase())
        );
        return {
          ...state,
          productosEnc: resultado,
          productosMostrar: resultado,
        };
      }

    case OBTENER_CATEGORIAS:
      return {
        ...state,
        categorias: payload,
      };

    case FILTER_CATEGORIA:
      let filteredProductos = [...state.allProductos];
      let filter;
      filter = filteredProductos.filter((producto) =>
        producto.categoria.includes(payload)
      );
      return {
        ...state,
        productosMostrar: filter,
        currentPage: 1,
      };

    case SET_ORDER:
      let orderedProductos = [...state.productosMostrar];
      let ordered;
      if (payload === "Ascendente") {
        ordered = orderedProductos.sort((a, b) => a.precio - b.precio);
      } else if (payload === "Descendente") {
        ordered = orderedProductos.sort((a, b) => b.precio - a.precio);
      } else {
        ordered = orderedProductos;
      }
      return {
        ...state,
        productosMostrar: ordered,
      };

    case AGREGAR_CARRITO:
      return {
        ...state,
        carrito: [...state.carrito, payload],
      };

    case QUITAR_CARRITO:
      const carritoFiltrado = state.carrito.filter(
        (productos) => productos.idProducto !== payload
      );
      return {
        ...state,
        carrito: carritoFiltrado,
      };

    case SET_INICIO_SESION:
      return {
        ...state,
        inicioSesion: payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
