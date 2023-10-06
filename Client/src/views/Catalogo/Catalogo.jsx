import React from "react";

import Cards from "../../components/Cards/Cards.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Ordering from "../../components/Ordering/Ordering.jsx";
import Pagination from "../../components/Pagination/pagination.components.jsx";
import { setCurrenPage, traerActiveProductos } from "../../redux/actions.js";
import { useDispatch } from "react-redux";

const Catalogo = () => {
  const dispatch = useDispatch();
  dispatch(setCurrenPage(1));
  dispatch(traerActiveProductos());
  return (
    <>
      <Filter />
      <Ordering />
      <Cards />
      <Pagination estado={"productosMostrar"} />
    </>
  );
};

export default Catalogo;
