import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Ordering from "../../components/Ordering/Ordering.jsx";
import Pagination from "../../components/Pagination/pagination.components.jsx";

const Catalogo = () => {
  const traerProductos = useSelector((state) => state.productosMostrar);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardForPage] = useState(9);

  const ultimoIndiceProducto = currentPage * cardForPage;
  const primerIndiceProducto = ultimoIndiceProducto - cardForPage;
  const currentProductos = traerProductos.slice(
    primerIndiceProducto,
    ultimoIndiceProducto
  );

  const paged = function (pageNumber) {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Filter />
      <Ordering />
      <Cards productos={currentProductos} />
      <Pagination
        cardForPage={cardForPage}
        productos={traerProductos.length}
        paged={paged}
      />
    </>
  );
};

export default Catalogo;
