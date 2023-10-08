import React from "react";
import Cards from "../../components/Cards/Cards.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Ordering from "../../components/Ordering/Ordering.jsx";
import Pagination from "../../components/Pagination/pagination.components.jsx";
import style from './Catalogo.module.css';

const Catalogo = () => {
  return (
    <>
      <div className={style.spaceNav} /> {/* ESTE DIV ES PARA EL ESPACIO DEL NAV */}
      <Filter />
      <Ordering />
      <Cards />
      <Pagination />
    </>
  );
};

export default Catalogo;
