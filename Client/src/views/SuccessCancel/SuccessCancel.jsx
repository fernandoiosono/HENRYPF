import style from './SuccessCancel.module.css';
import check from '../../assets/img/success/check.png';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { cargarCarrito } from '../../redux/actions';

const SuccessCancel = () => {

    const URL = '/moveon/';
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idStripeSession = queryParams.get('session_id');
    const { data } = useSelector((state) => state.usuario);
    const forBack = data?{idUser: data.idUser, idStripeSession}:null;
    const [ address, setAddress ] = useState('');
    
    const envioSolicitud = async () => {
        if (forBack) {
            const { data } = await axios.patch(`${URL}orders/paid`,forBack);
            setAddress(data.address)
        }
    };
    
    useEffect(() => {
        dispatch(cargarCarrito([]));
        address===''?envioSolicitud():null
    },[forBack])

    return(
        <div className={style.SuccessCancel}>
            <img src={check} className={style.check} />
            <h1 className={style.muchas}>¡Muchas gracias por su compra!</h1>
            <h2 className={style.orden}>Su orden será enviada lo más pronto posible a la dirección: {address}</h2>
            <h4 className={style.volver} onClick={() => navigate('/catalogo')}>Volver al catalogo</h4>
        </div>
    )
};

export default SuccessCancel