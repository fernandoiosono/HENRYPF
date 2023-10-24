import React, { useEffect } from "react";
import style from './Carrito.module.css';
import { useSelector } from "react-redux";
import CarritoTotal from "./CarritoTotal/CarritoTotal";
import axios from "axios";
import Producto from './Producto/Producto';
import { useNavigate } from "react-router-dom";

const Carrito = () => {

    const carrito = useSelector(state => state.carrito);
    const inicioSesion = useSelector(state => state.inicioSesion);
    const { data } = useSelector((state) => state.usuario);
    const navigate = useNavigate();
    const URL = "http://localhost:3001/";

    const cantProductos = () => {
        let cantProductos = [];
        carrito.map(prod => {
          cantProductos.push({
            idProduct:prod.idProduct,
            quantity:prod.OrderProduct.quantity
          })
        });
        return cantProductos
      };

    useEffect(() => {
        if (inicioSesion) axios.post(`${URL}moveon/shoppingcart/${data.idUser}`, cantProductos());
        if (!inicioSesion) localStorage.setItem("carritoInvitado", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <>
            {
                carrito.length === 0 ?
                    <div className={style.noProducto}>
                        <h1 className={style.noProductoH1}>Aún no tienes productos agregados!</h1>
                        <h4 className={style.noProductoH4} onClick={() => navigate('/catalogo')}>Ir a comprar</h4>
                    </div> :
                    <div className={style.carrito}>
                        <h1 className={style.titulo}>Mi carrito de compras</h1>
                        <div className={style.productos}>
                            <div className={style.titulos}>
                                <div className={style.spaceBorrar} />
                                <h2 className={style.tituloImg}>Imagen</h2>
                                <h2 className={style.tituloNom}>Nombre</h2>
                                <h2 className={style.tituloCenter}>Cantidad</h2>
                                <h2 className={style.tituloCenter}>Stock</h2>
                                <h2 className={style.tituloCenter}>Precio und</h2>
                                <h2 className={style.tituloCenter}>Total</h2>
                            </div>
                            {carrito.map((producto, index) => (
                                <Producto producto={producto} key={index} />
                            ))}
                            <CarritoTotal />
                        </div>
                    </div>
            }
        </>
    );
};

export default Carrito;