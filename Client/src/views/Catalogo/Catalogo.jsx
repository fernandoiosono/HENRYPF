import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Ordering from "../../components/Ordering/Ordering.jsx";

const Catalogo = () => {
  const traerProductos = useSelector((state) => state.allProductos);
  console.log(traerProductos);
  return (
    <>
      <Filter />
      <Ordering />
      <Cards productos={traerProductos} />
    </>
  );
};

export default Catalogo;
