import { useEffect, useState } from 'react';
import style from './CarritoTotal.module.css';

const CarritoTotal = ({ carritoListo }) => {

    const [ totalDescuento, setTotalDescuento] = useState(0);

    console.log(carritoListo);
    
    useEffect(() => {
        if (carritoListo.length>0) {
            setTotalDescuento(carritoListo.map(producto=> {
                if (producto.descuento>0) {
                    console.log(producto.cantidad);
                    return totalDescuento+(producto.cantidad*(producto.precio-(producto.precio*producto.descuento/100)))
                }
            }))
        }
    },[carritoListo])

    return(
        <div className={style.carritoTotal}>

        </div>
    )
};

export default CarritoTotal