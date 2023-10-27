import React, { useEffect } from "react";
import Aside from "../../components/Aside/Aside.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import Pagination from "../../components/Pagination/pagination.components.jsx";
import { setCurrenPage, traerActiveProductos } from "../../redux/actions.js";
import { useDispatch } from "react-redux";

const Catalogo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(traerActiveProductos());
  }, []);

  dispatch(setCurrenPage(1));
  return (
    <>
      <div className="main-container">
        <Aside />
        <Cards />
      </div>
      <Pagination estado={"productosMostrar"} />
    </>
  );
};

export default Catalogo;
