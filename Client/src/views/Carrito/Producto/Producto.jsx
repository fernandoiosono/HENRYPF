import { useEffect, useRef, useState } from 'react';
import style from './Producto.module.css';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { useDispatch } from 'react-redux';
import { quitarCarrito, setCantidadCarrito } from '../../../redux/actions';

const Producto = ({ producto }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(() => producto.OrderProduct.quantity);
    const subTotal = producto.price * producto.OrderProduct.quantity;

    useEffect(() => {
        dispatch(setCantidadCarrito({...producto, OrderProduct:{quantity}}))
    }, [quantity]);

    const handleCantidad = (orden) => {
        let newquantity = quantity;
        if (orden === "+") {
            newquantity += 1;
          if (newquantity > producto.stock) {
            Swal.fire({
              title: "La cantidad ingresada no puede superar lo que hay en stock",
              text: ("Stock: " + producto.stock + ' unidades'),
              icon: "warning",
            }).then(() => { });
          } else {
            setQuantity(newquantity)
          }
        } else if (orden === "-" && newquantity !== 1) {
            newquantity -= 1;
          setQuantity(newquantity)
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
                <h5 className={style.cant}>{quantity}</h5>
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