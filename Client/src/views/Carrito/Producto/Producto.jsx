import { useEffect, useRef, useState } from 'react';
import style from './Producto.module.css';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { useDispatch } from 'react-redux';
import { quitarCarrito, setCantidadCarrito } from '../../../redux/actions';

const Producto = ({ producto }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cantidad, setCantidad] = useState(() => producto.cantidad);
    const subTotal = producto.price * producto.cantidad;

    useEffect(() => {
        dispatch(setCantidadCarrito({ ...producto, cantidad }))
    }, [cantidad]);

    const handleCantidad = (orden) => {
        let nuevaCantidad = cantidad;
        if (orden === "+") {
            nuevaCantidad+=1
            setCantidad(nuevaCantidad);
            if (nuevaCantidad > producto.stock) {
                Swal.fire({
                    title: "La cantidad ingresada no puede superar lo que hay en stock",
                    text: ("Stock: " + producto.stock + ' unidades'),
                    icon: "warning",
                }).then(() => setCantidad(nuevaCantidad - 1));
            }
        } else if (orden === "-" && cantidad !== 1) {
            nuevaCantidad-=1
            setCantidad(nuevaCantidad)
        }
    };

    return (
        <div className={style.producto} key={producto.idProduct}>
            <div className={style.divBorar}>
                <h1
                    className={style.borar}
                    title="quitar del carrito"
                    onClick={() => dispatch(quitarCarrito(producto.idProduct))}
                >X</h1>
            </div>
            <div className={style.divImg}>
                <img
                    src={producto.imageURL}
                    className={style.imagen}
                    onClick={() => navigate(`/detalle/${producto.idProduct}`)}
                />
            </div>
            <h5
                className={style.nombre}
                onClick={() => navigate(`/detalle/${producto.idProduct}`)}
            >{producto.name}</h5>
            <div className={style.divCant}>
                <div className={style.divMenos} onClick={() => handleCantidad("-")}>
                    <h5 className={style.menos}>-</h5>
                </div>
                <h5 className={style.cant}>{cantidad}</h5>
                <div className={style.divMas} onClick={() => handleCantidad("+")}>
                    <h5 className={style.mas}>+</h5>
                </div>
            </div>
            <h5 className={style.stock}>{producto.stock}</h5>
            <h5 className={style.precio}>$ {producto.price.toFixed(2)}</h5>
            <h5 className={style.subTotal}>$ {subTotal.toFixed(2)}</h5>
        </div>
    )
};

export default Producto