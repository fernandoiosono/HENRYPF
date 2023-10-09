import React, { useState, useEffect } from "react";
import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setOrder,
  deleteProduct,
  traerAllProductos,
} from "../../redux/actions.js";
import Item from "../Item/Item";
import Swal from "sweetalert2";

function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProductos);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const ultimoIndiceProducto = currentPage * itemsPerPage;
  const primerIndiceProducto = ultimoIndiceProducto - itemsPerPage;
  const productsToShow = products.slice(
    primerIndiceProducto,
    ultimoIndiceProducto
  );

  useEffect(() => {
    dispatch(traerAllProductos());
  }, [dispatch]);

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");

  const handleDeleteProduct = (idProduct) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Un producto no se puede recuperar",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3005d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteProduct(idProduct));
        dispatch(traerAllProductos());
        navigate("/catalogo");
      }
    });
  };

  const handleOrderName = () => {
    if (nombre === "") {
      setNombre(true);
      dispatch(setOrder("NombreDescendente"));
    } else if (nombre === true) {
      setNombre(false);
      dispatch(setOrder("NombreAscendente"));
    } else if (nombre === false) {
      setNombre("");
    }
  };

  const handleOrderCategory = () => {
    if (categoria === "") {
      setCategoria(true);
      dispatch(setOrder("CategoriaDescendente"));
    } else if (categoria === true) {
      setCategoria(false);
      dispatch(setOrder("CategoriaAscendente"));
    } else if (categoria === false) {
      setCategoria("");
    }
  };

  const handleOrderEstado = () => {
    if (estado === "") {
      setEstado(true);
      dispatch(setOrder("estadoDescendente"));
    } else if (estado === true) {
      setEstado(false);
      dispatch(setOrder("estadoAscendente"));
    } else if (estado === false) {
      setEstado("");
    }
  };

  const handleOrderStock = () => {
    if (stock === "") {
      setStock(true);
      dispatch(setOrder("stockDescendente"));
    } else if (stock === true) {
      setStock(false);
      dispatch(setOrder("stockAscendente"));
    } else if (stock === false) {
      setStock("");
    }
  };

  const handleOrderPrecio = () => {
    if (precio === "") {
      setPrecio(true);
      dispatch(setOrder("precioDescendente"));
    } else if (precio === true) {
      setPrecio(false);
      dispatch(setOrder("precioAscendente"));
    } else if (precio === false) {
      setPrecio("");
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <div className="products-area-wrapper tableView">
            <div className="products-header">
              <div className="product-cell ">
                <button onClick={handleOrderName}>Item</button>
                <div>
                  {nombre === "" ? (
                    <p></p>
                  ) : nombre === true ? (
                    <p>↑</p>
                  ) : (
                    <p>↓</p>
                  )}
                </div>
              </div>
              <div className="product-cell category">
                <button onClick={handleOrderCategory}>Categoria</button>
                <div>
                  {categoria === "" ? (
                    <p></p>
                  ) : categoria === true ? (
                    <p>↑</p>
                  ) : (
                    <p>↓</p>
                  )}
                </div>
              </div>
              <div className="product-cell status-cell">
                <button onClick={handleOrderEstado}>Estado</button>
                <div>
                  {estado === "" ? (
                    <p></p>
                  ) : estado === true ? (
                    <p>↑</p>
                  ) : (
                    <p>↓</p>
                  )}
                </div>
              </div>
              <div className="product-cell ">
                <button onClick={handleOrderStock}>Stock</button>
                <div>
                  {stock === "" ? (
                    <p></p>
                  ) : stock === true ? (
                    <p>↑</p>
                  ) : (
                    <p>↓</p>
                  )}
                </div>
              </div>
              <div className="product-cell ">
                <button onClick={handleOrderPrecio}>Precio</button>
                <div>
                  {precio === "" ? (
                    <p></p>
                  ) : precio === true ? (
                    <p>↑</p>
                  ) : (
                    <p>↓</p>
                  )}
                </div>
              </div>
              <div className="product-cell stock">Editar</div>
              <div className="product-cell stock">Eliminar</div>
            </div>
            {productsToShow.length > 0
              ? productsToShow.map((producto, index) => (
                  <Item
                    key={index}
                    index={index}
                    producto={producto}
                    handleDeleteProduct={handleDeleteProduct}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
