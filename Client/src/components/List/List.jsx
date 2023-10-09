import React, { useEffect, useState } from "react";
import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import { traerAllProductos, deleteProduct } from "../../redux/actions.js";
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
      }
    });
  };

  const getProducts = async () => {
    dispatch(traerAllProductos);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <div className="products-area-wrapper tableView">
            <div className="products-header">
              <div className="product-cell ">Items</div>
              <div className="product-cell category">Categoria</div>
              <div className="product-cell status-cell">Estado</div>
              <div className="product-cell stock">Stock</div>
              <div className="product-cell stock">Precio</div>
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
