import style from './Nav.module.css';
import logo from '../../assets/img/logo/logo.png';
import iconoCarrito from '../../assets/img/carrito/carrito.png';
import lupa from '../../assets/img/lupa/lupa.png';
import home from '../../assets/img/home/home.png';
import back from '../../assets/img/back/back.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { buscarPruductos, setPagina } from '../../redux/actions';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {

    const inicioSesion = useSelector(state=>state.inicioSesion);
    const carrito = useSelector(state=>state.carrito);
    const productosEnc = useSelector(state=>state.productosEnc); //!ESTE CODIGO ES SOLO PARA VER QUE SI ESTE SIRVIENDO EL SEARCH
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [ nombre, setNombre ] = useState('');

    const handleChange = (event) => {
        setNombre(event.target.value)
    };

    useEffect(() => {                        //!ESTE CODIGO ES SOLO PARA VER QUE SI ESTE SIRVIENDO EL SEARCH
        console.log(productosEnc); 
    },[productosEnc]);

    const handleSearch = () => {
        if (nombre=='') return alert('¡Por favor ingrese un nombre o un ID!');
        dispatch(setPagina(1));
        dispatch(buscarPruductos(nombre))
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
          }
    };

    const homeHiden = () => {
        if (pathname!=='/home') {
            return style.home
        } else {
            return style.homeHidden
        }
    }

    const inicioCarrito = () => {
        if (!inicioSesion){
            return(
                <h3 className={style.iniciar} onClick={() => navigate('/acceso')}>Iniciar Sesion</h3>
            )
        } else {
            return(
                <div className={style.carritoCont}>
                    <h3 className={style.contador} onClick={() => navigate('/carrito')}>{carrito.length}</h3>
                    <img src={iconoCarrito}
                        alt="carrito"
                        className={style.carrito}
                        onClick={() => navigate('/carrito')}
                    />
                </div>
            )
        }
    };

    return(
        <div className={style.nav}>
            <img src={back} className={style.back} onClick={() => navigate(-1)}/>
            <h3 className={style.sobre} onClick={() => navigate('/about')}>Sobre nosotros</h3>
            <img src={logo} alt="moveOn" className={style.logo} />
                <img
                    src={home} alt="home"
                    className={homeHiden()}
                    onClick={() => navigate('/home')}
                />
            <div className={style.search}>
                <img
                    src={lupa}
                    onClick={() => handleSearch()}
                    className={style.botonBuscar}
                />
                <input
                    type="text"
                    placeholder='Buscar Producto'
                    className={style.input}
                    onChange={handleChange}
                    value={nombre}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className={style.div}/>
            {inicioCarrito()}
        </div>
    )
};

export default Nav