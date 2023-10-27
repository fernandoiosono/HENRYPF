import styled from "styled-components";
import Nav from "./nav/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import logo from "../assets/img/logo/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import {
  traerAllProductos,
  traerActiveProductos,
  obtenerCategorias,
  cargarCarrito,
  crearUsuario,
} from "../redux/actions";
import {
  Home,
  Catalogo,
  Acceso,
  About,
  Carrito,
  Detail,
  Pago,
  CatalogoAdmin,
  EdicionProducto,
  Success
} from "../views";
import "./App.css";

const App = () => {
  const {user, isAuthenticated} = useAuth0();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.usuario);
 
  const carritoInvitado = (localStorage.getItem("carritoInvitado")).length > 1 ? JSON.parse(localStorage.getItem("carritoInvitado")) : [];
  
  const newUsuario = ()=>{
    if(user){
      return {
        idAuth0: user.sub,
        name: user.name,
        nickName: user.nickname,
        email: user.email,
        imageURL: user.picture,
      };
    }
  }
  
  useEffect(()=>{
    if (isAuthenticated) {
      dispatch(crearUsuario(newUsuario()));
    }
  },[user]);
  

  useEffect(() => {
    dispatch(cargarCarrito(carritoInvitado));
    dispatch(traerAllProductos());
    dispatch(traerActiveProductos());
    dispatch(obtenerCategorias());
  }, []);
  
  useEffect(() => {
    if (data) {
      dispatch(cargarCarrito(data.idUser, carritoInvitado));
      localStorage.setItem("carritoInvitado", "");
    }
  }, [data]);

  const handlerClassName = () => {
    if (pathname === "/acceso") return "background_acceso";
  };

  return (
    <>
      <SectionApp>
        <main className={handlerClassName()}>
          <Nav />
          <div className="spaceNav">
            <img src={logo} className="logoSpace"/>
          </div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/acceso" element={<Acceso />} />
            <Route path="/about" element={<About />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/detalle/:id" element={<Detail />} />
            <Route path="/pago" element={<Pago />} />
            <Route path="/catalogoAdmin" element={<CatalogoAdmin />} />
            <Route path="/detalleAdmin/:id" element={<EdicionProducto />} />
            <Route path="/edicion" element={<EdicionProducto />} />
            <Route path="/success" element={<Success />} />
            {/* <Route path="/orden/:id" element={<DetailOrder />} /> */}

          </Routes>
        </main>
      </SectionApp>
    </>
  );
};

const SectionApp = styled.section`
  height: calc(100vh - 40px);
  padding: 0px;
`;

export default App;
