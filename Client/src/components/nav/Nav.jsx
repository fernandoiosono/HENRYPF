import style from './Nav.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from './SearchBar';
import logo from '../../assets/img/logo/logo.png';
import iconoCarrito from '../../assets/img/carrito/carrito.png';
import home from '../../assets/img/home/home.png';
import back from '../../assets/img/back/back.png';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setInicioSesion } from '../../redux/actions';

const Nav = () => {

    const inicioSesion = useSelector(state => state.inicioSesion);
    const carrito = useSelector(state => state.carrito);
    const { user } = useAuth0();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginWithRedirect } = useAuth0();
    const { pathname } = useLocation();

    useEffect(() => {
        if (user) dispatch(setInicioSesion(true)) 
    },[user])

    const homeHidden = () => {
        if (pathname !== '/home') {
            return style.home
        } else {
            return style.homeHidden
        }
    };

    const adminHidden = () => {
        if (inicioSesion) {
            if (pathname==="/catalogoAdmin") return style.adminHidden;
            return style.admin
        } else {
            return style.adminHidden
        }
    }

    const inicioCarrito = () => {
        if (!inicioSesion){
            return(
                <h3 className={style.iniciar} onClick={() => loginWithRedirect()}>Iniciar Sesion</h3>
            )
        } else {
        console.log(user.picture);
            return(
                <div className={style.carritoCont}>
                    <h3 className={style.contador} onClick={() => navigate('/carrito')}>{carrito.length}</h3>
                    <img src={iconoCarrito}
                        alt="carrito"
                        className={style.carrito}
                        onClick={() => navigate('/carrito')}
                    />
                    <img
                        src={user.picture}
                        alt="perfil"
                        className={style.perfil}
                        onClick={() => navigate('/acceso')}
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
            <h3 className={adminHidden()} onClick={() => navigate('/catalogoAdmin')}>admin</h3>
                <img
                    src={home} alt="home"
                    className={homeHidden()}
                    onClick={() => navigate('/home')}
                />
                <SearchBar/>
            <div className={style.div}/>
            {inicioCarrito()}
        </div>
    )
};

export default Nav