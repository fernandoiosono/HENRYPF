import style from './Nav.module.css';
import logo from '../../assets/img/logo/logo.png';
import iconoCarrito from '../../assets/img/carrito/carrito.png';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { traerProductos } from '../../redux/actions';

const Nav = () => {

    const inicioSesion = useSelector(state=>state.inicioSesion);
    const carrito = useSelector(state=>state.carrito);
    const dispatch = useDispatch();
    const [ nombre, setNombre ] = useState('');

    const handleChange = (event) => {
        setNombre(event.target.value)
    };

    const handleSearch = () => {
        if (nombre=='') return alert('¡Por favor ingrese un nombre o un ID!');
        dispatch(traerProductos(nombre));
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
                    <h3 className={style.contador}>{carrito.length}</h3>
                    <img src={iconoCarrito} alt="carrito" className={style.carrito}/>
                </div>
            )
        }
    };

    return(
        <div className={style.nav}>
            <img src={logo} alt="moveone" className={style.logo}/>
            <div className={style.search}>
                <label className={style.label}>Buscar producto: </label>
                <input
                    type="text"
                    placeholder='Ingrese un nombre o un ID'
                    className={style.input}
                    onChange={handleChange}
                    value={nombre}
                    onKeyPress={handleKeyPress}
                />
                <button className={style.botonBuscar} onClick={() => handleSearch()}>🔎</button>
            </div>
            {inicioCarrito()}
        </div>
    )
};

export default Nav