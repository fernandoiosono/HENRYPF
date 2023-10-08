import style from './CarritoTotal.module.css';

const CarritoTotal = ({ carritoListo }) => {

    const totalDescuento = () => {
        let totalDescuento = 0
        carritoListo.map(producto=>{
            if (producto.descuento > 0) {
                totalDescuento+=producto.cantidad * (producto.precio * producto.descuento / 100)
            }
        })
        return totalDescuento.toFixed(2)
    };
    console.log(totalDescuento());

    return(
        <div className={style.carritoTotal}>
            <div className={style.valores}>
                
            </div>
        </div>
    )
};

export default CarritoTotal