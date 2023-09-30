import style from './Nav.module.css';
import logo from '../../assets/img/logo/logo.png';
import iconoCarrito from '../../assets/img/carrito/carrito.png';
import lupa from '../../assets/img/lupa/lupa.png';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { buscarPruductos, setPagina } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const inicioSesion = useSelector(state=>state.inicioSesion);
    const carrito = useSelector(state=>state.carrito);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ nombre, setNombre ] = useState('');

    const handleChange = (event) => {
        setNombre(event.target.value)
    };

    const handleSearch = () => {
        if (nombre=='') return alert('¡Por favor ingrese un nombre o un ID!');
        dispatch(setPagina(1));
        dispatch(buscarPruductos(nombre))
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
          }
    }

    const inicioCarrito = () => {
        if (!inicioSesion){
            return(
                <h3 className={style.iniciar}>Iniciar Sesion</h3>
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
            <h3 className={style.sobre} onClick={() => navigate('/about')}>Sobre nosotros</h3>
            <img src={logo} alt="moveone" className={style.logo}/>
            <div className={style.search}>
                <img
                    src={lupa} alt="lupa"
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