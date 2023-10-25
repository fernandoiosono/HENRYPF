import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByCategory,
  traerActiveProductos,
  filterByStatus,
  getOrders,
  setCurrenPage,
} from "../../redux/actions";
import "./Filter.css";
import { useLocation } from "react-router";

const Filter = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const categorias = useSelector((state) => state.categorias); //Trae desde el estado global la lista de categorias
  const status = ["PAID", "DELIVERED", "RECEIVED"];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");

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

  const handleCheckboxStatus = (stat) => {
    setSelectedStatus(stat);
    dispatch(filterByStatus(stat));
    dispatch(setCurrenPage(1));
  };

  const handleApplyFilters = () => {
    // Aquí puedes usar el array de categorías seleccionadas para filtrar los productos.
    dispatch(filterByCategory(selectedCategories));
    // dispatch(setCurrenPage(1));
  };
  const handleResetFilters = () => {
    setSelectedCategories([]);
    dispatch(traerActiveProductos());
    dispatch(setCurrenPage(1));
  };

  const handleResetFiltersOrders = () => {
    setSelectedStatus("");
    dispatch(getOrders());
    dispatch(setCurrenPage(1));
  };

  if (location.pathname === "/catalogo") {
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
  } else {
    return (
      <div>
        <div>
          <label className="label">Filtrar por:</label>
        </div>

        <div>
          <ul className="ulFilter">
            {status.map((stat, index) => (
              <li className="liFilter" key={index}>
                <div>
                  <input
                    id={stat}
                    type="radio"
                    checked={selectedStatus === stat}
                    onChange={() => handleCheckboxStatus(stat)}
                  />
                  <label htmlFor={stat}>{stat}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <button className="btnFilter" onClick={handleResetFiltersOrders}>
          Restablecer
        </button>
      </div>
    );
  }
};

export default Filter;
