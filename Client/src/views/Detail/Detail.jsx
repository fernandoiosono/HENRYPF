import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { agregarCarrito } from "../../redux/actions";
import axios from "axios";
import { setCantidadCarrito } from "../../redux/actions";
import Swal from "sweetalert2";

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
  const prodEnCarrito = carrito.find(prod => prod.idProduct == id);
  const URL = "/moveon/";

  useEffect(() => {
    setProducto(allActiveProducts.find((prod) => prod.idProduct == id));
  }, [id, allActiveProducts]);

  const cantProductos = () => {
    let cantProductos = [];
    carrito.map(prod => {
      cantProductos.push({
        idProduct: prod.idProduct,
        quantity: prod.OrderProduct.quantity
      })
    });
    return cantProductos
  };

  useEffect(() => {
    if (inicioSesion && carrito.length > 0) axios.post(`${URL}shoppingcart/${data.idUser}`, cantProductos());
    if (!inicioSesion) localStorage.setItem("carritoInvitado", JSON.stringify(carrito));
  }, [carrito]);

  const handleRuta = () => {
    const quantity = 1;
    if (inicioSesion) {
      const producExistente = carrito.find(
        (produc) => produc.idProduct == producto.idProduct
      );
      if (!producExistente) {
        dispatch(agregarCarrito({ ...producto, OrderProduct: { quantity } }))
      }
      navigate("/carrito");
    } else {
      dispatch(agregarCarrito({ ...producto, OrderProduct: { quantity } }));
      loginWithRedirect();
    }
  };

  const botonCarrito = () => {
    const quantity = 1;
    if (carrito.length === 0) {
      dispatch(agregarCarrito({ ...producto, OrderProduct: { quantity } }));
    } else {
      const producExistente = carrito.find(
        (produc) => produc.idProduct == producto.idProduct
      );
      if (!producExistente) {
        dispatch(agregarCarrito({ ...producto, OrderProduct: { quantity } }))
      }
    }
  };

  const handleCantidad = (orden) => {
    let quantity = prodEnCarrito.OrderProduct.quantity;
    if (orden === "+") {
      quantity += 1;
      if (quantity > producto.stock) {
        Swal.fire({
          title: "La cantidad ingresada no puede superar lo que hay en stock",
          text: ("Stock: " + producto.stock + ' unidades'),
          icon: "warning",
        }).then(() => { });
      } else {
        dispatch(setCantidadCarrito({ ...prodEnCarrito, OrderProduct: { quantity } }))
      }
    } else if (orden === "-" && quantity !== 1) {
      quantity -= 1;
      dispatch(setCantidadCarrito({ ...prodEnCarrito, OrderProduct: { quantity } }))
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
        {
          prodEnCarrito ?
            <div className={style.divCant}>
              <div className={style.divMenos} onClick={() => handleCantidad("-")}>
                <h5 className={style.menos}>-</h5>
              </div>
              <h5 className={style.cant}>{prodEnCarrito.OrderProduct.quantity}</h5>
              <div className={style.divMas} onClick={() => handleCantidad("+")}>
                <h5 className={style.mas}>+</h5>
              </div>
            </div> :
            <button className={style.agregar} onClick={() => botonCarrito()}>
              Agregar al carrito
            </button>
        }
        <button className={style.comprar} onClick={() => handleRuta()}>
          Comprar ahora
        </button>
      </div>
      <div className={style.detalles}>
        <h1 className={style.nombre}>{producto.name}</h1>
        {handlePrecioDesc()}
        <h4 className={style.stock}>{producto.stock} unidades disponibles</h4>
        <p className={style.descripcion}>{producto.description}</p>
      </div>
    </div>
  );
};

export default Detail;
