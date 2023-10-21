import { useNavigate } from 'react-router-dom';
import style from './CarritoTotal.module.css';
import { useSelector } from 'react-redux';
import { useStripe } from '@stripe/react-stripe-js'
import { createSessionStripe } from '../../../helpers/helpers';

const CarritoTotal = () => {

    const navigate = useNavigate();
    const carrito = useSelector(state=>state.carrito);
    console.log(carrito);
    const { data } = useSelector(state=>state.usuario);
    const stripe = useStripe();

    const subTotal = () => {
        let subTotal = 0;
        carrito.map(producto=>{
            subTotal+=producto.ShoppingCart.quantity*producto.price
        });
        return subTotal.toFixed(2)
    };

    const totalDescuento = () => {
        let totalDescuento = 0;
        carrito.map(producto=>{
            if (producto.discount > 0) {
                totalDescuento+=producto.ShoppingCart.quantity * (producto.price * producto.discount / 100)
            }
        });
        return totalDescuento.toFixed(2)
    };

    const handleCheckout = async ()=>{

        const items = carrito.map(item=>{
            return {
                quantity: item.cantidad,
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.imageURL]
                    },
                    unit_amount: [item.price-(item.price*item.discount/100)]*100,
                }
            }
        });
        const order = {
            line_items : items,
            customer_email: data.email
        }
        const sessionId = await createSessionStripe(order);
        console.log({sessionId})
        const { error } = await stripe.redirectToCheckout(sessionId);

        if(error){
            console.log(error);
        }
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
                <button type='submit' className={style.pago} onClick={handleCheckout}>{'Continuar con el pago =>'}</button>
            </div>
        </div>
    )
};

export default CarritoTotal