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
  TRAER_USUARIOS,
  TRAER_ORDENES,
} from "./actions_types";

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL="https://henrypf-production-fae5.up.railway.app";

const URL = "/moveon/";
const ORDERS = [
  {
    idOrder: "f6f14626-169d-4ad6-bee5-a3e5995f2cff",
    address: "546 Bokee Court",
    phone: "+1 (986) 475-2920",
    amount: "$2,321.57",
    paymentDate: "13-11-1979",
    deliveredDate: "14-01-2000",
    receivedDate: "13-08-1981",
    status: "DELIVERED",
    UserIdUser: "79ff740b-76c5-4fe7-a074-ccf89557ec6b",
  },
  {
    idOrder: "bcf6f660-2376-4901-98e8-3779a1f0b716",
    address: "624 Harbor Court",
    phone: "+1 (991) 530-2192",
    amount: "$1,518.22",
    paymentDate: "19-08-2012",
    deliveredDate: "20-01-1993",
    receivedDate: "30-03-1971",
    status: "PAID",
    UserIdUser: "ca6e7e47-da16-4b54-8a36-1ebca12636b7",
  },
  {
    idOrder: "1b456b01-f00b-49ef-9382-3ef8f9cf6e42",
    address: "339 Sedgwick Street",
    phone: "+1 (853) 448-2695",
    amount: "$2,954.30",
    paymentDate: "11-04-2007",
    deliveredDate: "14-01-2012",
    receivedDate: "25-11-2005",
    status: "PAID",
    UserIdUser: "ff7983e7-4b06-4b04-90f2-e9b3a0d12792",
  },
  {
    idOrder: "7267547c-831d-4b8d-a713-6a2aa8e3d45e",
    address: "253 Bush Street",
    phone: "+1 (933) 454-3566",
    amount: "$3,532.56",
    paymentDate: "08-10-2019",
    deliveredDate: "29-04-2009",
    receivedDate: "28-04-1971",
    status: "PAID",
    UserIdUser: "f649b73d-d3a3-4d0b-a7de-85602d7fa0f2",
  },
  {
    idOrder: "6f53ed66-fe50-4f04-b3e3-7158316099b0",
    address: "411 Dewey Place",
    phone: "+1 (835) 508-3110",
    amount: "$1,231.13",
    paymentDate: "25-08-1998",
    deliveredDate: "23-04-2015",
    receivedDate: "20-04-2002",
    status: "PAID",
    UserIdUser: "12eef704-93e0-4bf6-9978-d9bf7a8bc676",
  },
  {
    idOrder: "9f4beb72-5d3e-4ef4-a511-86da70d4444c",
    address: "586 Onderdonk Avenue",
    phone: "+1 (808) 510-3098",
    amount: "$1,000.60",
    paymentDate: "29-05-2006",
    deliveredDate: "13-10-2018",
    receivedDate: "25-03-1998",
    status: "DELIVERED",
    UserIdUser: "13e2986f-1a4f-4344-af62-7ede311752f5",
  },
  {
    idOrder: "b75f7821-644b-492e-a466-df2db967b393",
    address: "621 Beverly Road",
    phone: "+1 (902) 537-2470",
    amount: "$1,814.17",
    paymentDate: "01-01-1992",
    deliveredDate: "12-10-1983",
    receivedDate: "12-08-1970",
    status: "RECEIVED",
    UserIdUser: "6c089d84-0cfa-4d6f-9a0e-908cbac75d80",
  },
  {
    idOrder: "b875d356-a28d-4058-a0ca-084fcb0aa228",
    address: "313 Seaview Court",
    phone: "+1 (905) 485-3277",
    amount: "$3,474.75",
    paymentDate: "12-09-1993",
    deliveredDate: "13-06-1997",
    receivedDate: "27-12-1992",
    status: "RECEIVED",
    UserIdUser: "8147a0c1-d6a7-4625-ae32-f6ae20a1ff94",
  },
  {
    idOrder: "1eec4cee-cafd-4850-9401-8bef4f5af876",
    address: "732 Monroe Street",
    phone: "+1 (884) 468-2980",
    amount: "$2,862.19",
    paymentDate: "08-09-1987",
    deliveredDate: "14-02-2020",
    receivedDate: "10-08-2004",
    status: "PAID",
    UserIdUser: "4874dbdc-ea01-4057-83b8-a6f882256f9f",
  },
  {
    idOrder: "35c96b71-93f0-4da9-b805-db32d4ea428b",
    address: "546 Roebling Street",
    phone: "+1 (868) 531-3152",
    amount: "$1,833.28",
    paymentDate: "03-08-2007",
    deliveredDate: "01-09-1975",
    receivedDate: "24-06-2005",
    status: "PAID",
    UserIdUser: "8475e600-806c-4d3e-8c04-15a689602d95",
  },
  {
    idOrder: "43d798df-1897-4c4e-bc27-7605b5011522",
    address: "201 Harden Street",
    phone: "+1 (984) 458-3084",
    amount: "$3,864.66",
    paymentDate: "30-05-2006",
    deliveredDate: "29-05-2023",
    receivedDate: "19-07-2014",
    status: "PAID",
    UserIdUser: "ac215acc-eb00-47bb-b770-40ed4716e18f",
  },
  {
    idOrder: "1b105c3b-0fd3-414c-b6c1-c782785dde77",
    address: "556 Ivan Court",
    phone: "+1 (918) 522-2908",
    amount: "$1,877.17",
    paymentDate: "27-12-2016",
    deliveredDate: "10-09-2023",
    receivedDate: "05-10-2013",
    status: "DELIVERED",
    UserIdUser: "d3afc2b2-025c-4ce7-90dc-1306de81f82e",
  },
  {
    idOrder: "bf0e28e9-07c5-4e69-8e13-1156c6377983",
    address: "342 Woodruff Avenue",
    phone: "+1 (867) 464-2910",
    amount: "$1,834.60",
    paymentDate: "08-08-2007",
    deliveredDate: "08-11-1986",
    receivedDate: "14-06-1993",
    status: "PAID",
    UserIdUser: "ee03d3e8-2b33-45e4-ac35-34604acfc902",
  },
  {
    idOrder: "7199fa60-85b8-4910-ae5e-263f49dba979",
    address: "558 Fleet Walk",
    phone: "+1 (862) 406-2234",
    amount: "$3,546.63",
    paymentDate: "06-05-1975",
    deliveredDate: "13-08-1998",
    receivedDate: "11-06-1983",
    status: "RECEIVED",
    UserIdUser: "35cc18eb-5712-4470-a2ac-435aa2eeb57f",
  },
  {
    idOrder: "3f2ce487-7ab4-4c41-a92b-544c37746e51",
    address: "682 Danforth Street",
    phone: "+1 (915) 475-2620",
    amount: "$2,351.20",
    paymentDate: "21-06-2018",
    deliveredDate: "07-09-1992",
    receivedDate: "25-05-2011",
    status: "PAID",
    UserIdUser: "5969c2ed-477d-4508-88ba-9e52365c8235",
  },
  {
    idOrder: "d59c80e9-0d54-41e9-8754-bceb4f0dc326",
    address: "819 Schenck Court",
    phone: "+1 (807) 580-3088",
    amount: "$1,614.08",
    paymentDate: "02-08-1985",
    deliveredDate: "05-06-2011",
    receivedDate: "20-09-2022",
    status: "RECEIVED",
    UserIdUser: "0c4c7eab-7b5a-4211-b291-31524105007e",
  },
  {
    idOrder: "e747d876-0a8b-4c40-951e-31a7e0e92465",
    address: "450 Poplar Avenue",
    phone: "+1 (908) 436-2702",
    amount: "$3,339.88",
    paymentDate: "25-04-1982",
    deliveredDate: "19-05-2001",
    receivedDate: "02-11-1987",
    status: "DELIVERED",
    UserIdUser: "c809b247-bf6f-4e27-9994-1c446efa1204",
  },
  {
    idOrder: "0ea3803e-bcd7-4fbf-8707-b6eb880f0fee",
    address: "982 Hewes Street",
    phone: "+1 (971) 489-2065",
    amount: "$2,648.14",
    paymentDate: "29-03-2005",
    deliveredDate: "10-09-1994",
    receivedDate: "26-06-2020",
    status: "PAID",
    UserIdUser: "6356186e-0e88-4529-b40b-bae654ed0150",
  },
  {
    idOrder: "b11361d3-1129-47ed-ab4a-3947c2bf36ec",
    address: "751 Cooke Court",
    phone: "+1 (882) 439-3164",
    amount: "$2,708.16",
    paymentDate: "01-10-2012",
    deliveredDate: "23-12-2014",
    receivedDate: "23-02-2010",
    status: "RECEIVED",
    UserIdUser: "6fe5405c-e4ea-438b-9f54-6305268d6cde",
  },
  {
    idOrder: "7b00f21e-58e9-4481-b652-0fb28b418d3d",
    address: "103 Pleasant Place",
    phone: "+1 (942) 494-2603",
    amount: "$1,106.89",
    paymentDate: "27-04-2019",
    deliveredDate: "12-07-2021",
    receivedDate: "04-11-2004",
    status: "PAID",
    UserIdUser: "15bc4098-87ef-4448-a895-e154ef69b6f5",
  },
  {
    idOrder: "bf43e72a-19ee-4f35-b536-b5ad493c3605",
    address: "974 Lenox Road",
    phone: "+1 (822) 541-2212",
    amount: "$2,117.23",
    paymentDate: "15-06-1977",
    deliveredDate: "11-10-2016",
    receivedDate: "18-11-1995",
    status: "RECEIVED",
    UserIdUser: "ae67d731-c7a9-4e76-8d65-ea05fb91e673",
  },
  {
    idOrder: "e5168315-8f00-46fa-be3c-9fe2da0cdbaf",
    address: "726 Balfour Place",
    phone: "+1 (931) 438-3525",
    amount: "$3,291.78",
    paymentDate: "02-06-1993",
    deliveredDate: "11-10-2014",
    receivedDate: "12-07-2020",
    status: "DELIVERED",
    UserIdUser: "b426c06b-0b15-47ab-ac2e-b55919dc6eb8",
  },
  {
    idOrder: "8d5835ba-5d5d-4eac-8019-058f69805f76",
    address: "643 Everit Street",
    phone: "+1 (932) 552-2367",
    amount: "$3,602.81",
    paymentDate: "23-01-2007",
    deliveredDate: "13-09-1980",
    receivedDate: "06-01-1985",
    status: "DELIVERED",
    UserIdUser: "ffe5154f-67ab-4106-856c-a23ba3734142",
  },
  {
    idOrder: "afba0eb0-9b64-47ff-836f-77578e17922d",
    address: "269 Kosciusko Street",
    phone: "+1 (825) 498-2189",
    amount: "$3,576.61",
    paymentDate: "04-09-1992",
    deliveredDate: "04-11-1976",
    receivedDate: "02-07-2002",
    status: "PAID",
    UserIdUser: "f5516267-189c-4ad6-8355-f858138a2e52",
  },
  {
    idOrder: "c6ea4463-1ab1-426f-9069-68365a0b47ee",
    address: "500 Lee Avenue",
    phone: "+1 (992) 415-2109",
    amount: "$2,621.04",
    paymentDate: "25-09-2003",
    deliveredDate: "25-11-2011",
    receivedDate: "17-04-2023",
    status: "RECEIVED",
    UserIdUser: "11c2d2e3-cc91-43a1-a53f-e8d7c2c977f1",
  },
  {
    idOrder: "5f08c88b-1598-4e11-9f8a-ccaa7c2ced0e",
    address: "577 Irving Street",
    phone: "+1 (998) 431-2869",
    amount: "$2,472.47",
    paymentDate: "01-12-1985",
    deliveredDate: "29-10-2017",
    receivedDate: "04-09-2022",
    status: "PAID",
    UserIdUser: "03309753-ee06-4f90-8811-b75d94510164",
  },
  {
    idOrder: "7aaedc52-f85b-487d-a70b-f121f235ec8e",
    address: "851 Glenwood Road",
    phone: "+1 (919) 404-3479",
    amount: "$2,492.96",
    paymentDate: "12-06-2008",
    deliveredDate: "02-11-2000",
    receivedDate: "11-12-2007",
    status: "RECEIVED",
    UserIdUser: "9fdc6d05-e593-4a41-a050-2098fb1297ae",
  },
  {
    idOrder: "0e6bcc3c-0e45-4a88-881b-92d7c34e6ff0",
    address: "815 Leonora Court",
    phone: "+1 (955) 465-3441",
    amount: "$3,136.71",
    paymentDate: "10-01-2006",
    deliveredDate: "11-06-1993",
    receivedDate: "04-08-1972",
    status: "RECEIVED",
    UserIdUser: "b8e2126b-85a6-4d91-9c0c-272a4ee83f98",
  },
  {
    idOrder: "5e6f4772-1a9c-4b16-83f4-3a3eb2a180d5",
    address: "644 Middagh Street",
    phone: "+1 (908) 404-2209",
    amount: "$1,696.44",
    paymentDate: "28-11-2016",
    deliveredDate: "10-05-1976",
    receivedDate: "16-09-2012",
    status: "RECEIVED",
    UserIdUser: "c7a50b2f-62f8-4715-830b-121ec7aa9929",
  },
  {
    idOrder: "53371c77-c857-435c-a7c8-fcf3773efe32",
    address: "524 Monaco Place",
    phone: "+1 (992) 414-2574",
    amount: "$3,849.19",
    paymentDate: "19-01-1973",
    deliveredDate: "04-03-1988",
    receivedDate: "11-08-1972",
    status: "RECEIVED",
    UserIdUser: "4119863a-e9bb-4694-8144-7e4fec43a890",
  },
  {
    idOrder: "768d7cc9-15fd-43ac-be00-793d8fe4ad47",
    address: "184 Pilling Street",
    phone: "+1 (984) 449-3122",
    amount: "$1,950.16",
    paymentDate: "12-12-1999",
    deliveredDate: "13-08-2001",
    receivedDate: "05-07-1986",
    status: "PAID",
    UserIdUser: "b8f1851a-43d7-4d06-9dc1-5e6164b12eea",
  },
  {
    idOrder: "3ae34d60-fcff-443e-b80c-8487f0682229",
    address: "303 Moffat Street",
    phone: "+1 (931) 473-3438",
    amount: "$2,737.92",
    paymentDate: "17-10-1980",
    deliveredDate: "06-12-1979",
    receivedDate: "10-11-1975",
    status: "RECEIVED",
    UserIdUser: "2fc60a87-aacf-4450-bd5c-1137d1e67434",
  },
  {
    idOrder: "d9f902c2-0bdf-4670-a610-3715e15985de",
    address: "913 John Street",
    phone: "+1 (978) 425-3994",
    amount: "$1,190.50",
    paymentDate: "04-03-2009",
    deliveredDate: "28-03-2004",
    receivedDate: "14-11-1999",
    status: "RECEIVED",
    UserIdUser: "00fdf004-6e52-4644-8778-01434db55911",
  },
  {
    idOrder: "19974cd1-0e37-4687-9b95-13e1e8f27158",
    address: "307 Lott Street",
    phone: "+1 (920) 428-3403",
    amount: "$1,435.36",
    paymentDate: "10-05-1980",
    deliveredDate: "10-02-1982",
    receivedDate: "05-06-1983",
    status: "DELIVERED",
    UserIdUser: "65d2f876-b3d9-4f43-acde-f101025725c5",
  },
  {
    idOrder: "436a4c9c-895a-4124-94fa-a0249ff582b6",
    address: "902 Gaylord Drive",
    phone: "+1 (887) 540-3348",
    amount: "$3,888.50",
    paymentDate: "20-12-1971",
    deliveredDate: "30-06-1985",
    receivedDate: "12-03-1975",
    status: "PAID",
    UserIdUser: "34bfed97-78f1-4969-bcc6-7f938ec48840",
  },
  {
    idOrder: "c59bcac8-cf15-4703-90dd-fb5689718811",
    address: "355 Minna Street",
    phone: "+1 (967) 402-2968",
    amount: "$1,622.12",
    paymentDate: "05-06-1991",
    deliveredDate: "26-03-2021",
    receivedDate: "23-11-2004",
    status: "PAID",
    UserIdUser: "629379e7-8c66-4b65-a9e1-91572ba406b9",
  },
  {
    idOrder: "904a49db-252b-43f1-9678-040a81281992",
    address: "155 Interborough Parkway",
    phone: "+1 (842) 490-4000",
    amount: "$1,696.42",
    paymentDate: "29-01-2005",
    deliveredDate: "12-08-1999",
    receivedDate: "14-11-1983",
    status: "RECEIVED",
    UserIdUser: "3db40e87-500e-462d-baa7-0b34b9b2d896",
  },
  {
    idOrder: "6a92cbdb-704d-420f-8dbf-ec95d427e837",
    address: "654 Furman Avenue",
    phone: "+1 (961) 539-2260",
    amount: "$2,503.01",
    paymentDate: "20-08-2000",
    deliveredDate: "15-02-2023",
    receivedDate: "01-04-1985",
    status: "RECEIVED",
    UserIdUser: "c13b347f-2f65-4f04-9e5c-27bed0e0907c",
  },
  {
    idOrder: "45742c70-980b-46a2-a2ce-0f41e970bd3c",
    address: "701 McClancy Place",
    phone: "+1 (973) 449-3414",
    amount: "$1,671.97",
    paymentDate: "22-12-1994",
    deliveredDate: "21-12-2005",
    receivedDate: "24-02-1991",
    status: "PAID",
    UserIdUser: "2e41104e-b4f4-47f5-9be4-08c500378589",
  },
  {
    idOrder: "c5588c82-c9d2-4835-891a-301cfdd5b104",
    address: "631 Amber Street",
    phone: "+1 (823) 504-2555",
    amount: "$2,841.44",
    paymentDate: "23-09-1989",
    deliveredDate: "31-01-1982",
    receivedDate: "17-06-2002",
    status: "DELIVERED",
    UserIdUser: "167bdad5-3158-4c76-b6df-b4d8bdfdf767",
  },
];

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

export const deleteProduct = (idProduct, value) => {
  if (value === "eliminar") {
    try {
      return async (dispatch) => {
        const response = await axios.put(
          `${URL}products/${idProduct}?activate=false`
        );

        if (response.status === 200) {
          return dispatch({
            type: BORRAR_PRODUCTO,
            payload: ["eliminar", response.data],
          });
        }
      };
    } catch (error) {
      console.log(error);
    }
  } else if (value === "desactivar") {
    try {
      return async (dispatch) => {
        const response = await axios.put(
          `${URL}products/${idProduct}?activate=false`
        );

        if (response.status === 200) {
          return dispatch({
            type: BORRAR_PRODUCTO,
            payload: ["desactivar", response.data],
          });
        }
      };
    } catch (error) {
      console.log(error);
    }
  } else if (value === "activar") {
    try {
      return async (dispatch) => {
        const response = await axios.put(
          `${URL}products/${idProduct}?activate=true`
        );

        if (response.status === 200) {
          return dispatch({
            type: BORRAR_PRODUCTO,
            payload: ["activar", response.data],
          });
        }
      };
    } catch (error) {
      console.log(error);
    }
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

export const cargarCarrito = (dato, carritoInvitado) => {
  try {
    return async (dispatch) => {
      if (typeof dato === "object") {
        return dispatch({
          type: CARGAR_CARRITO,
          payload: dato,
        });
      } else {
        const { data } = await axios.get(`${URL}shoppingcart/${dato}`);
        console.log(carritoInvitado);
        const combinado = [...carritoInvitado, ...data];
        const resultado = combinado.reduce((acc, current) => {
          const x = acc.find((item) => item.idProduct === current.idProduct);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
        return dispatch({
          type: CARGAR_CARRITO,
          payload: resultado,
        });
      }
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
      const usuarioCreado = await axios.post(
        `http://localhost:3001/moveon/users/`,
        newUsuario
      );
      dispatch({
        type: USUARIO,
        payload: usuarioCreado,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuario = (cambiosUsuario) => {
  try {
    return async (dispatch) => {
      const editarUser = await axios.patch(
        `http://localhost:3001/moveon/users/`,
        cambiosUsuario
      );
      if (editarUser.status === 200) {
        return dispatch({
          type: EDITAR_USUARIO,
          payload: [editarUser, true],
        });
      } else {
        return dispatch({
          type: EDITAR_USUARIO,
          payload: [editarUser, false],
        });
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(
        `http://localhost:3001/moveon/users/all`
      );
      return dispatch({
        type: TRAER_USUARIOS,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = () => {
  try {
    return async (dispatch) => {
      // const { data } = await axios.get(`${URL}orders/all`);
      const data = ORDERS;
      return dispatch({
        type: TRAER_ORDENES,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
