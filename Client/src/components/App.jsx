import styled from "styled-components";
import Nav from "./nav/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { traerProductos } from "../redux/actions";
import {
  Landing,
  Home,
  Catalogo,
  Acceso,
  About,
  Carrito,
  Detail,
  Pago,
  Registro,
  CatalogoAdmin,
  EdicionProducto,
} from "../views";

import './App.css';

const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerProductos()); //! para cargar allProductos
  }, []);
  
  const handleClassName = () =>{
    if(pathname === "/acceso") return "background_acceso";
    if(pathname === "/home") return "background_home";
  }

  return (
    <>
      {pathname !== "/" &&
        <>
          <Nav />
          <div className="spaceNav"/>
        </>
      }
      <main className={handleClassName()}>
        <SectionApp>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/acceso" element={<Acceso />} />
            <Route path="/about" element={<About />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/detalle/:id" element={<Detail />} />
            <Route path="/pago" element={<Pago />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/catalogoAdmin" element={<CatalogoAdmin />} />
            <Route path="/edicion" element={<EdicionProducto />} />
          </Routes>
        </SectionApp>
      </main>
    </>
  );
};

const SectionApp = styled.section`
  height: calc(100vh - 40px);
  padding: 20px;
`;

export default App;
