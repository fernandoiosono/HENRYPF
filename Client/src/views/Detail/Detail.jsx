import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import style from './Detail.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { agregarCarrito } from "../../redux/actions";
import axios from "axios";

const Detail = () => {

    const { id } = useParams();
    const allProductos = useSelector(state => state.allProductos);
    const inicioSesion = useSelector(state => state.inicioSesion);
    const carrito = useSelector(state => state.carrito);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginWithRedirect } = useAuth0();
    const [producto, setProducto] = useState({});
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

    useEffect(() => {
        setProducto(allProductos.find(prod => prod.idProducto == id))
    }, [id,allProductos]);

    const handleRuta = () => {
        if (inicioSesion) {
            dispatch(agregarCarrito(producto))
            navigate('/carrito')
        } else {
            loginWithRedirect()
        }
    };

    const botonCarrito = () => {
        if (carrito.length === 0) {
            dispatch(agregarCarrito(producto))
        } else {
            const producExistente = carrito.find(produc => produc.idProducto == producto.idProducto)
            if (!producExistente) {
                dispatch(agregarCarrito(producto))
            }
        }
    };

    const handlePrecioDesc = () => {
        if (producto.descuento === 0) {
            return (
                <div className={style.precios}>
                    <h1 className={style.precio2}>USD ${producto.precio.toFixed(2)}</h1>
                </div>
            )
        } else {
            const descuento = producto.precio * producto.descuento / 100;
            const nuevoPrecio = producto.precio-descuento
            return (
                <>
                    <h3 className={style.precio1}>USD ${producto.precio?producto.precio.toFixed(2):producto.precio}</h3>
                    <div className={style.precios}>
                        <h1 className={style.precio2}>USD ${nuevoPrecio.toFixed(2)}</h1>
                        <h2 className={style.descuento}>{producto.descuento}% descuento</h2>
                    </div>
                </>
            )
        }
    };

    return (
        <>
            <div className={style.spaceNav} /> {/* ESTE DIV ES PARA EL ESPACIO DEL NAV */}
            <div className={style.detalle}>
                <div className={style.imagenBotones}>
                    <img src={producto.imagen} className={style.imagen} />
                    <button className={style.comprar} onClick={() => handleRuta()}>Comprar ahora</button>
                    <button className={style.agregar} onClick={() => botonCarrito()}>Agregar al carrito</button>
                </div>
                <div className={style.detalles}>
                    <h1 className={style.nombre}>{producto.nombre}</h1>
                    {handlePrecioDesc()}
                    <h4 className={style.stock}>{producto.stock} unidades disponibles</h4>
                    <p className={style.descripcion}>{producto.descripcion}</p>
                    <h5 className={style.id}>ID del producto: {producto.idProducto}</h5>
                </div>
            </div>
        </>
    );
};

export default Detail;
