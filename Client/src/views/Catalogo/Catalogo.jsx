import React from "react";

import Cards from "../../components/Cards/Cards.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Ordering from "../../components/Ordering/Ordering.jsx";
import Pagination from "../../components/Pagination/pagination.components.jsx";

const Catalogo = () => {
  return (
    <>
      <Filter />
      <Ordering />
      <Cards />
      <Pagination />
    </>
  );
};

export default Catalogo;
