import React, { useEffect, useState } from "react";
import "./pagination.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrenPage } from "../../redux/actions";

const generatePages = (productos, itemsPerPage) => {
  const bound = productos.length;
  const pageNums = [];
  for (let i = 1; i <= Math.ceil(bound / itemsPerPage); i++) {
    pageNums.push(i);
  }
  return pageNums;
};

function Pagination() {
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const productos = useSelector((state) => state.productosMostrar);
  const [pageNums, setPageNums] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setPageNums(generatePages(productos, itemsPerPage));
  }, [productos, itemsPerPage]);

  const handlePage = (currentPage) => {
    dispatch(setCurrenPage(currentPage));
  };

  return (
    <div className="div_pagin">
      {pageNums &&
        pageNums.map((p) => (
          <button key={p} onClick={() => handlePage(p)}>
            {p}
          </button>
        ))}
    </div>
  );
}

export default Pagination;
