import React from "react";
import style from './Home.module.css';
import botonBlanco from '../../assets/img/home/botonProductosBlanco.png';
import { useNavigate } from "react-router-dom";
import imagenFondo from '../../assets/img/home/FotoPrincipalHome.png'

const Home = ()=>{

    const navigate = useNavigate();

    return (
        <div className={style.home}>
            <div className={style.spaceNav} /> {/* ESTE DIV ES PARA EL ESPACIO DEL NAV */}
            <img src={imagenFondo} className={style.imgFondo} />
            <div className={style.momento}>
                <h1 className={style.momentoBlanco}>ES EL</h1>
                <h1 className={style.momentoBlanco}>MOMENTO DE</h1>
                <h1 className={style.momentoAmarillo}>DISFRUTAR</h1>
                <h1 className={style.momentoBlanco}>EL PROCESO</h1>
            </div>
            <div className={style.movimiento}>
                <h1 className={style.movimientoMov}>MOVIMIENTO ES</h1>
                <h1 className={style.movimientoVida}>VIDA</h1>
            </div>
            <div className={style.divProductos}>
                <div className={style.botonProductos} onClick={() => navigate('/catalogo')}>
                    <img src={botonBlanco} className={style.botonBlanco} />
                    <h1 className={style.productos}>PRODUCTOS</h1>
                </div>
                <h3 className={style.notaBoton}>Adelgazar | Aumento masa muscular</h3>
            </div>
        </div>
    );
};

export default Home;