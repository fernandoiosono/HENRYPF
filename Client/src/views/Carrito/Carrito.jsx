import React, { useEffect, useState } from "react";
import style from './Carrito.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CarritoTotal from "./CarritoTotal";
import { quitarCarrito } from "../../redux/actions";
import axios from "axios";

const Carrito = () => {

    const carrito = useSelector(state => state.carrito);
    const [ carritoListo, setCarritoListo ] = useState([]);
    const dispatch = useDispatch();
    const URL = "http://localhost:3001/";

    const idsProductos = () => {
        let idProductos = [];
        carrito.map(prod=>{
            idProductos.push(prod.idProducto)
        });
        return idProductos
    };

    useEffect(() => {
        axios.post(`${URL}moveon/shoppingcart/${'92887e1d-63bc-41a1-9327-d3f79a696fe3'}`, idsProductos()); //! PENDIENTE CONSULTAR DE DONDE TOMO EL ID CLIENTE
    },[carrito]);

    console.log(carrito);

    return (
        <>
            <div className={style.spaceNav} /> {/* ESTE DIV ES PARA EL ESPACIO DEL NAV */}
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
                    {carrito.map(producto => {
                        const [cantidad, setCantidad] = useState(() => 1);
                        const navigate = useNavigate();
                        const subTotal = producto.precio * cantidad;
                        
                        useEffect(() => {
                            const producEncontrado = carritoListo.find(prod => prod.idProducto == producto.idProducto);
                            if (!producEncontrado) {
                                setCarritoListo(prevCarrito => [...prevCarrito, { ...producto, cantidad }]);
                            } else {
                                const nuevoCarrito = carritoListo.map(prod => {
                                    if (prod.idProducto == producto.idProducto) {
                                        return { ...prod, cantidad }
                                    } else {
                                        return prod
                                    }
                                })
                                setCarritoListo(nuevoCarrito);
                            };
                            if (cantidad > producto.stock) setCantidad(cantidad - 1)
                        }, [cantidad]);
                        console.log('hasta aqui si');
                        
                        const handleChange = (event) => {
                            if (event.target.value > producto.stock) {
                                alert("La cantidad ingresada no puede superar lo que hay en stock")
                            };
                            if (event.target.value > 0) {
                                setCantidad(event.target.value)
                            }
                        };

                        return (
                            <div className={style.producto} key={producto.idProducto}>
                                <div className={style.divBorar}>
                                    <h1
                                        className={style.borar}
                                        title="quitar del carrito"
                                        onClick={() => dispatch(quitarCarrito(producto.idProducto))}
                                    >X</h1>
                                </div>
                                <div className={style.divImg}>
                                    <img
                                        src={producto.imagen}
                                        className={style.imagen}
                                        onClick={() => navigate(`/detalle/${producto.idProducto}`)}
                                    />
                                </div>
                                <h5
                                    className={style.nombre}
                                    onClick={() => navigate(`/detalle/${producto.idProducto}`)}
                                >{producto.nombre}</h5>
                                <div className={style.divCant}>
                                    <input
                                        type="number"
                                        className={style.cant}
                                        onChange={handleChange}
                                        value={cantidad || ''}
                                    />
                                </div>
                                <h5 className={style.stock}>{producto.stock}</h5>
                                <h5 className={style.precio}>$ {producto.precio.toFixed(2)}</h5>
                                <h5 className={style.subTotal}>$ {subTotal.toFixed(2)}</h5>
                            </div>
                        )
                    })}
                    <CarritoTotal carritoListo={carritoListo} />
                </div>
            </div>
        </>
    );
};

export default Carrito;
