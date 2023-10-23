import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setOrder } from "../../redux/actions";
import "./Ordering.css";

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
        <label className="label">Ordenar por:</label>
      </div>
      <div>
        <select value={selectOrder} onChange={handleOrderChange}>
          <option value="Relevancia">Relevancia</option>
          <option value="Ascendente">Precio: menor a mayor</option>
          <option value="Descendente">Precio: mayor a menor</option>
          <option value="CatNombreDescendente">Nombre: A...Z</option>
          <option value="CatNombreAscendente">Nombre: Z...A</option>
        </select>
      </div>
    </div>
  );
};

export default Ordering;
