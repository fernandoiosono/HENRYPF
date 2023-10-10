import styled from "styled-components";
import Nav from "./nav/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  traerAllProductos,
  traerActiveProductos,
  obtenerCategorias,
} from "../redux/actions";
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

import "./App.css";

const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerAllProductos());
    dispatch(traerActiveProductos());
    dispatch(obtenerCategorias());
  }, []);

  const handlerClassName = () => {
    if (pathname === "/acceso") return "background_acceso";
  };

  return (
    <>
      {pathname !== "/" &&
        <>
          <Nav />
        </>
      }
      <SectionApp>
        <main className={handlerClassName()}>
          <div className="spaceNav"/> {/* ESTE DIV ES PARA EL ESPACIO DEL NAV */}
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
            <Route path="/detalleAdmin/:id" element={<EdicionProducto />} />
            <Route path="/edicion" element={<EdicionProducto />} />
          </Routes>
        </main>
      </SectionApp>
    </>
  );
};

const SectionApp = styled.section`
  height: calc(100vh - 40px);
  padding: 20px;
`;

export default App;
