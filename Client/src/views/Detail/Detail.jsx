import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import style from './Detail.module.css'

const Detail = ()=>{

    const { id } = useParams();
    
    const allProductos = useSelector(state=>state.allProductos);
    const navigate = useNavigate();
    const [ producto, setProducto ] = useState({});

    useEffect(() => {
        setProducto(allProductos.find(prod => prod.idProducto == id))
    }, [id])

    const handlePrecioDesc = () => {
        if (producto.descuento===0) {
            return(
                <div className={style.precios}>
                    <h1 className={style.precio2}>USD ${producto.precio}</h1>
                </div>
            )
        } else {
            const descuento = producto.precio * producto.descuento / 100;
            const nuevoPrecio = producto.precio - descuento
            return (
                <>
                    <h3 className={style.precio1}>USD ${producto.precio}</h3>
                    <div className={style.precios}>
                        <h1 className={style.precio2}>USD ${nuevoPrecio}</h1>
                        <h2 className={style.descuento}>{producto.descuento}% descuento</h2>
                    </div>
                </>
            )
        }
    }

    return (
        <div className={style.detalle}>
            <div className={style.imagenBotones}>
                <img src={producto.imagen} className={style.imagen}/>
                <button className={style.comprar} onClick={() => navigate('/carrito')}>Comprar ahora</button>
                <button className={style.agregar}>Agregar al carrito</button>
            </div>
            <div className={style.detalles}>
                <h1 className={style.nombre}>{producto.nombre}</h1>
                {handlePrecioDesc()}
                <h4 className={style.stock}>{producto.stock} unidades disponibles</h4>
                <p className={style.descripcion}>{producto.descripcion}</p>
                <h5 className={style.id}>ID del producto: {producto.idProducto}</h5>
            </div>
        </div>
    );
};

export default Detail;
