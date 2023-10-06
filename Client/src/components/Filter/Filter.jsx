import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByCategory } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categorias); //Trae desde el estado global la lista de categorias

  const [selectCategoria, setSelectCategoria] = useState("");
  const handleCategoriasChange = (event) => {
    setSelectCategoria(event.target.value);
    dispatch(filterByCategory(event.target.value)); //Envia la accion para filtrar por la categoria deseada
  };

  return (
    <div>
      <div>
        <label>Filtrar por categoria:</label>
      </div>
      <div>
        <select value={selectCategoria} onChange={handleCategoriasChange}>
          <option value="">Todos</option>
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria.name}>
              {categoria.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
