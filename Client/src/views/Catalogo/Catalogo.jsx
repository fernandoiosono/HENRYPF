import React, { useEffect } from "react";

import Cards from "../../components/Cards/Cards.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Ordering from "../../components/Ordering/Ordering.jsx";
import Pagination from "../../components/Pagination/pagination.components.jsx";
import { setCurrenPage, traerActiveProductos } from "../../redux/actions.js";
import { useDispatch } from "react-redux";

const Catalogo = () => {
  useEffect(() => {
    dispatch(traerActiveProductos());
  }),
    [];
  const dispatch = useDispatch();
  dispatch(setCurrenPage(1));
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
