import React, { useEffect } from "react";
import style from './Carrito.module.css';
import { useSelector } from "react-redux";
import CarritoTotal from "./CarritoTotal/CarritoTotal";
import axios from "axios";
import Producto from './Producto/Producto';

const Carrito = () => {

    const carrito = useSelector(state => state.carrito);
    const inicioSesion = useSelector(state => state.inicioSesion);
    const URL = "http://localhost:3001/";
    const { data } = useSelector((state) => state.usuario);

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

    return (
        <>
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
                    {carrito.length === 0 &&
                        <div className={style.noProducto}>
                            <h1 className={style.noProductoH1}>Tu carrito aún está vacío!</h1>
                        </div>}
                    {carrito.map((producto, index) => (
                        <Producto producto={producto} key={index} />
                    ))}
                    <CarritoTotal />
                </div>
            </div>
        </>
    );
};

export default Carrito;