import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/actions";

const Ordering = () => {
  const dispatch = useDispatch();
  const [selectOrder, setSelectOrder] = useState("Ordenar");

  const handleOrderChange = (event) => {
    setSelectOrder(event.target.value);
    dispatch(setOrder(event.target.value));
  };
  return (
    <div>
      <div>
        <label>Ordenar por precio:</label>
      </div>
      <div>
        <select value={selectOrder} onChange={handleOrderChange}>
          <option value="Ordenar">Ordenar</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
    </div>
  );
};

export default Ordering;
