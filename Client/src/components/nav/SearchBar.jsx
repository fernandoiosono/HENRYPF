import style from "./SearchBar.module.css";
import { buscarPruductos, setCurrenPage } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import lupa from "../../assets/img/lupa/lupa.png";

const SearchBar = () => {
  const [nombre, setNombre] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSearch = () => {
    if (nombre == "") return alert("¡Por favor ingrese un nombre o un ID!");
    dispatch(setCurrenPage(1));
    dispatch(buscarPruductos(nombre));
    navigate("/catalogo");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={style.search}>
      <img
        src={lupa}
        onClick={() => handleSearch()}
        className={style.botonBuscar}
      />
      <input
        type="text"
        placeholder="Buscar Producto"
        className={style.input}
        onChange={handleChange}
        value={nombre}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
