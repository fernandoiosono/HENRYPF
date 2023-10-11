import { useEffect, useState } from 'react';
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
        if (cantidad > producto.stock) return setCantidad(cantidad - 1);
        dispatch(setCantidadCarrito({ ...producto, cantidad }))
    }, [cantidad]);

    const handleChange = (event) => {
        if (event.target.value > producto.stock) {
            Swal.fire({
                title: "La cantidad ingresada no puede superar lo que hay en stock",
                text: ("Stock: "+producto.stock+' unidades'),
                icon: "warning",
            }).then((result) => {});
        };
        if (event.target.value > 0) {
            setCantidad(event.target.value)
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
                <input
                    type="number"
                    className={style.cant}
                    onChange={handleChange}
                    value={cantidad || ''}
                />
            </div>
            <h5 className={style.stock}>{producto.stock}</h5>
            <h5 className={style.precio}>$ {producto.price.toFixed(2)}</h5>
            <h5 className={style.subTotal}>$ {subTotal.toFixed(2)}</h5>
        </div>
    )
};

export default Producto