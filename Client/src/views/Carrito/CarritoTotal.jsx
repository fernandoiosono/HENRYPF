import { useNavigate } from 'react-router-dom';
import style from './CarritoTotal.module.css';

const CarritoTotal = ({ carritoListo }) => {

    const navigate = useNavigate();

    const subTotal = () => {
        let subTotal = 0;
        carritoListo.map(producto=>{
            subTotal+=producto.cantidad*producto.precio
        });
        return subTotal.toFixed(2)
    };

    const totalDescuento = () => {
        let totalDescuento = 0;
        carritoListo.map(producto=>{
            if (producto.descuento > 0) {
                totalDescuento+=producto.cantidad * (producto.precio * producto.descuento / 100)
            }
        });
        return totalDescuento.toFixed(2)
    };

    return(
        <div className={style.carritoTotal}>
            <div className={style.valores}>
                <div className={style.divSubTotal}>
                    <h2 className={style.tituloSubTotal}>Sub total:</h2>
                    <h5 className={style.subTotal}>{subTotal()}</h5>
                </div>
                <div className={style.divDescuento}>
                    <h2 className={style.tituloDescuento}>Descuento:</h2>
                    <h5 className={style.Descuento}>- {totalDescuento()}</h5>
                </div>
                <div className={style.divTotal}>
                    <h2 className={style.tituloTotal}>Total:</h2>
                    <h5 className={style.total}>{(subTotal()-totalDescuento()).toFixed(2)}</h5>
                </div>
            </div>
            <div className={style.botones}>
                <button className={style.comprando} onClick={() => navigate('/catalogo')}>{'<= Continuar comprando'}</button>
                <button className={style.pago}>{'Continuar con el pago =>'}</button>
            </div>
        </div>
    )
};

export default CarritoTotal