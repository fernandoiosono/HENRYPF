import React, { useEffect, useState } from "react";
// import "./PaginationAdmin.css";
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

function PaginationOrders() {
  const itemsPerPage = 10;
  const orders = useSelector((state) => state.allOrders);
  const currentPage = useSelector((state) => state.currentPage); // Nuevo estado
  const [pageNums, setPageNums] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setPageNums(generatePages(orders, itemsPerPage));
  }, [orders, itemsPerPage]);

  const handlePage = (currentPage) => {
    dispatch(setCurrenPage(currentPage));
  };

  return (
    <div className="div_pagin">
      {pageNums &&
        pageNums.map((p) => (
          <button
            key={p}
            onClick={() => handlePage(p)}
            className={p === currentPage ? "active" : ""}
          >
            {p}
          </button>
        ))}
    </div>
  );
}

export default PaginationOrders;
