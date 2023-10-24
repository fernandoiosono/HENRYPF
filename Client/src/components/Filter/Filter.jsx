import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByCategory, traerActiveProductos } from "../../redux/actions";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categorias); //Trae desde el estado global la lista de categorias

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      // Si la categoría ya está seleccionada, la eliminamos del array.
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    } else {
      // Si la categoría no está seleccionada, la agregamos al array.
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleApplyFilters = () => {
    // Aquí puedes usar el array de categorías seleccionadas para filtrar los productos.
    dispatch(filterByCategory(selectedCategories));
  };
  const handleResetFilters = () => {
    setSelectedCategories([]);
    dispatch(traerActiveProductos());
  };

  return (
    <div>
      <div>
        <label className="label">Filtrar por:</label>
      </div>

      <div>
        <ul className="ulFilter">
          {categorias.map((categoria, index) => (
            <li className="liFilter" key={index}>
              <div>
                <input
                  id={categoria.name}
                  type="checkbox"
                  checked={selectedCategories.includes(categoria.idCategory)}
                  onChange={() => handleCheckboxChange(categoria.idCategory)}
                />
                <label htmlFor={categoria.name}>{categoria.name}</label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="btnFilter" onClick={handleApplyFilters}>
        Filtrar
      </button>
      <button className="btnFilter" onClick={handleResetFilters}>
        Restablecer
      </button>
    </div>
  );
};

export default Filter;
