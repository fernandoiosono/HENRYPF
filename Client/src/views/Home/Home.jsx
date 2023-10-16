import React from "react";
import style from './Home.module.css';
import botonBlanco from '../../assets/img/home/botonProductosBlanco.png';
import { useNavigate } from "react-router-dom";
import imagenFondo from '../../assets/img/home/FotoPrincipalHome.png';
import imgTesti1 from '../../assets/img/home/Testimonio1.jpg';
import imgTesti2 from '../../assets/img/home/Testimonio2.jpg';
import imgTesti3 from '../../assets/img/home/Testimonio3.jpg';

const Home = ()=>{

    const navigate = useNavigate();

    return (
        <div className={style.home}>
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
            <div className={style.divTestimonios}>
                <h3 className={style.testimonios}>TESTIMONIOS</h3>
                <div className={style.divTestimonio1}>
                    <h3 className={style.testimonio1}>
                        "Cada vez tengo más fuerza, ahora puedo hacer una rutina completa"
                    </h3>
                    <img src={imgTesti1} className={style.imgtestimonio1}/>
                </div>
                <div className={style.divTestimonio2}>
                    <img src={imgTesti2} className={style.imgtestimonio2}/>
                    <h3 className={style.testimonio2}>
                        "Llevo 6 meses utilizando las mancuernas y siguen como nuevas"
                    </h3>
                </div>
                <div className={style.divTestimonio3}>
                    <h3 className={style.testimonio3}>
                        "Llevo 6 meses utilizando las mancuernas y siguen como nuevas"
                    </h3>
                    <img src={imgTesti3} className={style.imgtestimonio3}/>
                </div>
            </div>
        </div>
    );
};

export default Home;