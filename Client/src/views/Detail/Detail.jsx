import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { agregarCarrito } from "../../redux/actions";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const allActiveProducts = useSelector((state) => state.allActiveProducts);
  const carrito = useSelector((state) => state.carrito);
  const inicioSesion = useSelector((state) => state.inicioSesion);
  const { data } = useSelector((state) => state.usuario);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const [producto, setProducto] = useState({});
  const URL = "http://localhost:3001/";

  useEffect(() => {
    setProducto(allActiveProducts.find((prod) => prod.idProduct == id));
  }, [id, allActiveProducts]);

  const idsProductos = () => {
    let idProductos = [];
    carrito.map(prod => {
      idProductos.push(prod.idProduct)
    });
    return idProductos
  };

  useEffect(() => {
    if (inicioSesion && carrito.length > 0) axios.post(`${URL}moveon/shoppingcart/${data.idUser}`, idsProductos())
  }, [carrito]);

  const handleRuta = () => {
    if (inicioSesion) {
      const cantidad = 1;
      const producExistente = carrito.find(
        (produc) => produc.idProduct == producto.idProduct
      );
      if (!producExistente) {
        dispatch(agregarCarrito({ ...producto, cantidad }))
      }
      navigate("/carrito");
    } else {
      loginWithRedirect();
    }
  };

  const botonCarrito = () => {
    const cantidad = 1;
    if (carrito.length === 0) {
      dispatch(agregarCarrito({ ...producto, cantidad }));
    } else {
      const producExistente = carrito.find(
        (produc) => produc.idProduct == producto.idProduct
      );
      if (!producExistente) {
        dispatch(agregarCarrito({ ...producto, cantidad }))
      }
    }
  };

  const handlePrecioDesc = () => {
    if (producto.discount === 0) {
      return (
        <div className={style.precios}>
          <h1 className={style.precio2}>USD ${producto.price.toFixed(2)}</h1>
        </div>
      );
    } else {
      const descuento = (producto.price * producto.discount) / 100;
      const nuevoPrecio = producto.price - descuento;
      return (
        <>
          <h3 className={style.precio1}>USD ${producto.price ? producto.price.toFixed(2) : null}</h3>
          <div className={style.precios}>
            <h1 className={style.precio2}>USD ${nuevoPrecio.toFixed(2)}</h1>
            <h2 className={style.descuento}>{producto.discount}% descuento</h2>
          </div>
        </>
      );
    }
  };

  return (
    <div className={style.detalle}>
      <div className={style.imagenBotones}>
        <img src={producto.imageURL} className={style.imagen} />
        <button className={style.comprar} onClick={() => handleRuta()}>
          Comprar ahora
        </button>
        <button className={style.agregar} onClick={() => botonCarrito()}>
          Agregar al carrito
        </button>
      </div>
      <div className={style.detalles}>
        <h1 className={style.nombre}>{producto.name}</h1>
        {handlePrecioDesc()}
        <h4 className={style.stock}>{producto.stock} unidades disponibles</h4>
        <p className={style.descripcion}>{producto.description}</p>
        <h5 className={style.id}>ID del producto: {producto.idProduct}</h5>
      </div>
    </div>
  );
};

export default Detail;
