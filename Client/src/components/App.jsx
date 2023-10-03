import styled from "styled-components";
import Nav from "./nav/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { traerProductos } from "../redux/actions";
import productosAux from './productosAux.json'; //!ESTE CODIGO ES PROVICIONAL MIENTRAS CONECTAMOS CON EL BACK
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
	EdicionProducto } from "../views";

const App = () => {

	const { pathname } = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		//dispatch(traerProductos())        //! para cargar allProductos
		dispatch(traerProductos(productosAux))  //!ESTE CODIGO ES PROVICIONAL MIENTRAS CONECTAMOS CON EL BACK
	},[])

	return (
		<SectionApp>
			<main>
				{pathname!=='/'&&<Nav/>}
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
			</main>
		</SectionApp>
	)
};

const SectionApp = styled.section`
	height: calc(100vh - 40px);
	padding:20px;
`;

export default App;