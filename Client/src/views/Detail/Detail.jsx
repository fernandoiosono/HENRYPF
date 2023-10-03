import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { agregarCarrito } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const allProductos = useSelector((state) => state.allProductos);
  const inicioSesion = useSelector((state) => state.inicioSesion);
  const carrito = useSelector((state) => state.carrito);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    setProducto(allProductos.find((prod) => prod.idProduct == id));
  }, [id, allProductos]);

  const handleRuta = () => {
    if (inicioSesion) {
      navigate("/carrito");
    } else {
      navigate("/acceso");
    }
  };

  const botonCarrito = () => {
    if (carrito.length === 0) {
      dispatch(agregarCarrito(producto));
    } else {
      const producExistente = carrito.find(
        (produc) => produc.idProducto == producto.idProducto
      );
      if (!producExistente) {
        dispatch(agregarCarrito(producto));
      }
    }
  };

  const handlePrecioDesc = () => {
    if (producto.discount === 0) {
      return (
        <div className={style.precios}>
          <h1 className={style.precio2}>USD ${producto.price}</h1>
        </div>
      );
    } else {
      const descuento = (producto.price * producto.discount) / 100;
      const nuevoPrecio = producto.price - descuento;
      return (
        <>
          <h3 className={style.precio1}>USD ${producto.price}</h3>
          <div className={style.precios}>
            <h1 className={style.precio2}>USD ${nuevoPrecio}</h1>
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
