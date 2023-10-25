import style from './SuccessCancel.module.css';
import check from '../../assets/img/success/check.png';
import { useNavigate } from 'react-router-dom';

const SuccessCancel = () => {

    const navigate = useNavigate();

    return(
        <div className={style.SuccessCancel}>
            <img src={check} className={style.check} />
            <h1 className={style.muchas}>¡Muchas gracias por su compra!</h1>
            <h2 className={style.orden}>Su orden será enviada lo más pronto posible</h2>
            <h4 className={style.volver} onClick={() => navigate('/catalogo')}>Volver al catalogo</h4>
        </div>
    )
};

export default SuccessCancel