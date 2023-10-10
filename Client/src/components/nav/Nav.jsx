import style from "./Nav.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "./SearchBar";
import logo from "../../assets/img/logo/logo.png";
import iconoCarrito from "../../assets/img/carrito/carrito.png";
import home from "../../assets/img/home/home.png";
import back from "../../assets/img/back/back.png";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setInicioSesion } from "../../redux/actions";

const Nav = () => {
  const inicioSesion = useSelector((state) => state.inicioSesion);
  const carrito = useSelector((state) => state.carrito);
  const { data } = useSelector((state) => state.usuario);
  const { user } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const { pathname } = useLocation();

  useEffect(() => {
    if (user) dispatch(setInicioSesion(true));
  }, [user]);

  const homeHidden = () => {
    if (pathname !== "/home") {
      return style.home;
    } else {
      return style.homeHidden;
    }
  };

  const adminHidden = () => {
    if (inicioSesion&&data&&data.isAdmin) {
      if (pathname === "/catalogoAdmin") return style.adminHidden;
      return style.admin;
    } else {
      return style.adminHidden;
    }
  };

  const inicioPerfil = () => {
    if (!inicioSesion) {
      return (
        <h3 className={style.iniciar} onClick={() => loginWithRedirect()}>
          Iniciar Sesion
        </h3>
      );
    } else {
      return (
        <div className={style.divPerfil}>
          <img
            src={data?data.imageURL:null}
            alt="perfil"
            className={style.perfil}
            onClick={() => navigate("/acceso")}
            title="perfil"
          />
        </div>
      );
    }
  };

  return (
    <div className={style.nav}>
      <img src={back} className={style.back} onClick={() => navigate(-1)} />
      <div className={style.div} />
      <h3 className={style.sobre} onClick={() => navigate("/about")}>
        Sobre nosotros
      </h3>
      <img
        src={home}
        title="home"
        alt="home"
        className={homeHidden()}
        onClick={() => navigate("/home")}
      />
      <h3
      title="catálogo admin"
      className={adminHidden()}
      onClick={() => navigate("/catalogoAdmin")}
      >admin</h3>
      <img src={logo} alt="moveOn" className={style.logo} />
      <SearchBar />
      <div className={style.div} />
      <div className={style.carritoCont}>
          <h3 className={style.contador} onClick={() => navigate("/carrito")}>
            {carrito.length}
          </h3>
          <img
            src={iconoCarrito}
            alt="carrito"
            title="carito"
            className={style.carrito}
            onClick={() => navigate("/carrito")}
          />
        </div>
      {inicioPerfil()}
    </div>
  );
};

export default Nav;