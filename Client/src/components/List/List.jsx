import React, { useState, useEffect } from "react";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  setOrder,
  deleteProduct,
  traerAllProductos,
} from "../../redux/actions.js";
import Item from "../Item/Item";
import Swal from "sweetalert2";

function List() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProductos);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const ultimoIndiceProducto = currentPage * itemsPerPage;
  const primerIndiceProducto = ultimoIndiceProducto - itemsPerPage;
  const productsToShow = products.slice(
    primerIndiceProducto,
    ultimoIndiceProducto
  );

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
        dispatch(deleteProduct(idProduct, "eliminar"));
      }
    });
  };

  const handleActiveProduct = (idProduct, active) => {
    if (active) {
      dispatch(deleteProduct(idProduct, "desactivar"));
    } else {
      dispatch(deleteProduct(idProduct, "activar"));
    }
  };

  const handleOrderName = () => {
    if (nombre === "") {
      setNombre(true);
      setCategoria("");
      setEstado("");
      setStock("");
      setPrecio("");
      dispatch(setOrder("NombreDescendente"));
    } else if (nombre === true) {
      setNombre(false);
      setCategoria("");
      setEstado("");
      setStock("");
      setPrecio("");
      dispatch(setOrder("NombreAscendente"));
    } else if (nombre === false) {
      setNombre("");
      setCategoria("");
      setEstado("");
      setStock("");
      setPrecio("");
    }
  };

  const handleOrderCategory = () => {
    if (categoria === "") {
      setCategoria(true);
      setNombre("");
      setEstado("");
      setStock("");
      setPrecio("");
      dispatch(setOrder("CategoriaDescendente"));
    } else if (categoria === true) {
      setCategoria(false);
      setNombre("");
      setEstado("");
      setStock("");
      setPrecio("");
      dispatch(setOrder("CategoriaAscendente"));
    } else if (categoria === false) {
      setCategoria("");
      setNombre("");
      setEstado("");
      setStock("");
      setPrecio("");
    }
  };

  const handleOrderEstado = () => {
    if (estado === "") {
      setEstado(true);
      setCategoria("");
      setNombre("");
      setStock("");
      setPrecio("");
      dispatch(setOrder("estadoDescendente"));
    } else if (estado === true) {
      setEstado(false);
      setCategoria("");
      setNombre("");
      setStock("");
      setPrecio("");
      dispatch(setOrder("estadoAscendente"));
    } else if (estado === false) {
      setEstado("");
      setCategoria("");
      setNombre("");
      setStock("");
      setPrecio("");
    }
  };

  const handleOrderStock = () => {
    if (stock === "") {
      setStock(true);
      setEstado("");
      setCategoria("");
      setNombre("");
      setPrecio("");
      dispatch(setOrder("stockDescendente"));
    } else if (stock === true) {
      setStock(false);
      setEstado("");
      setCategoria("");
      setNombre("");
      setPrecio("");
      dispatch(setOrder("stockAscendente"));
    } else if (stock === false) {
      setStock("");
      setEstado("");
      setCategoria("");
      setNombre("");
      setPrecio("");
    }
  };

  const handleOrderPrecio = () => {
    if (precio === "") {
      setPrecio(true);
      setStock("");
      setEstado("");
      setCategoria("");
      setNombre("");
      dispatch(setOrder("precioDescendente"));
    } else if (precio === true) {
      setPrecio(false);
      setStock("");
      setEstado("");
      setCategoria("");
      setNombre("");
      dispatch(setOrder("precioAscendente"));
    } else if (precio === false) {
      setPrecio("");
      setStock("");
      setEstado("");
      setCategoria("");
      setNombre("");
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <div className="products-area-wrapper tableView">
            <div className="products-header">
              <div className="product-cell ">
                <button className="button" onClick={handleOrderName}>
                  Item
                </button>
                <div>
                  {nombre === "" ? (
                    <FontAwesomeIcon icon={faSort} size="lg" />
                  ) : nombre === true ? (
                    <FontAwesomeIcon icon={faSortUp} size="lg" />
                  ) : (
                    <FontAwesomeIcon icon={faSortDown} size="lg" />
                  )}
                </div>
              </div>
              <div className="product-cell ">
                <button className="button" onClick={handleOrderCategory}>
                  Categoria
                </button>
                <div>
                  {categoria === "" ? (
                    <FontAwesomeIcon icon={faSort} size="lg" />
                  ) : categoria === true ? (
                    <FontAwesomeIcon icon={faSortUp} size="lg" />
                  ) : (
                    <FontAwesomeIcon icon={faSortDown} size="lg" />
                  )}
                </div>
              </div>
              <div className="product-cell ">
                <button className="button" onClick={handleOrderEstado}>
                  Estado
                </button>
                <div>
                  {estado === "" ? (
                    <FontAwesomeIcon icon={faSort} size="lg" />
                  ) : estado === true ? (
                    <FontAwesomeIcon icon={faSortUp} size="lg" />
                  ) : (
                    <FontAwesomeIcon icon={faSortDown} size="lg" />
                  )}
                </div>
              </div>
              <div className="product-cell ">
                <button className="button" onClick={handleOrderStock}>
                  Stock
                </button>
                <div>
                  {stock === "" ? (
                    <FontAwesomeIcon icon={faSort} size="lg" />
                  ) : stock === true ? (
                    <FontAwesomeIcon icon={faSortUp} size="lg" />
                  ) : (
                    <FontAwesomeIcon icon={faSortDown} size="lg" />
                  )}
                </div>
              </div>
              <div className="product-cell ">
                <button className="button" onClick={handleOrderPrecio}>
                  Precio
                </button>
                <div>
                  {precio === "" ? (
                    <FontAwesomeIcon icon={faSort} size="lg" />
                  ) : precio === true ? (
                    <FontAwesomeIcon icon={faSortUp} size="lg" />
                  ) : (
                    <FontAwesomeIcon icon={faSortDown} size="lg" />
                  )}
                </div>
              </div>
              <div className="product-cell ">
                <button className="button">Editar</button>
              </div>
              <div className="product-cell ">
                <button className="button">Activar</button>
              </div>
              <div className="product-cell ">
                <button className="button">Eliminar</button>
              </div>
            </div>
            {productsToShow.length > 0
              ? productsToShow.map((producto, index) => (
                  <Item
                    key={index}
                    index={index}
                    producto={producto}
                    handleDeleteProduct={handleDeleteProduct}
                    handleActiveProduct={handleActiveProduct}
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
