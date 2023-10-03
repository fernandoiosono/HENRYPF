import { useState } from "react";
import "./CrearProducto.css";

const CrearProducto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    imagen: "",
    descripcion: "",
    precio: "",
    stock: "",
    descuento: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    imagen: "",
    descripcion: "",
    precio: "",
    stock: "",
    descuento: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name + " " + value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};

    for (const key in validationErrors) {
      if (Object.hasOwnProperty.call(validationErrors, key)) {
        delete validationErrors[key];
      }
    }

    for (const key in formData) {
      if (
        formData[key] === "" ||
        (Array.isArray(formData[key]) && formData[key].length === 0)
      ) {
        validationErrors[key] = "Este campo es requerido.";
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        // const response = await axios.post(
        //   "http://localhost:3001/videogames", //!MODIFICAR A ENDPOINT DEL BACK
        //   formData
        // );

        alert("Producto creado");
        setFormData({
          nombre: "",
          imagen: "",
          descripcion: "",
          precio: "",
          stock: "",
          descuento: "",
        });
      } catch (error) {
        alert("Por favor valida la informacion");
      }
    }
  };
  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <div>
          <label className="label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            className="input"
            type="text"
            id="nombre"
            name="nombre"
            onChange={handleInputChange}
          />
          <span>{errors.nombre}</span>
        </div>
        <div>
          <label className="label" htmlFor="imagen">
            Imagen:
          </label>
          <input
            className="input"
            type="text"
            id="imagen"
            name="imagen"
            onChange={handleInputChange}
          />
          <span>{errors.imagen}</span>
        </div>
        <div>
          <label className="label" htmlFor="descripcion">
            Descripción:
          </label>
          <textarea
            className="textarea"
            id="descripcion"
            name="descripcion"
            onChange={handleInputChange}
          ></textarea>
          <span>{errors.descripcion}</span>
        </div>
        <div>
          <label className="label" htmlFor="precio">
            Precio:
          </label>
          <input
            className="input"
            type="number"
            id="precio"
            name="precio"
            onChange={handleInputChange}
          />
          <span>{errors.precio}</span>
        </div>
        <div>
          <label className="label" htmlFor="stock">
            Stock:
          </label>
          <input
            className="input"
            type="number"
            id="stock"
            name="stock"
            onChange={handleInputChange}
          />
          <span>{errors.stock}</span>
        </div>
        <div>
          <label className="label" htmlFor="descuento">
            Descuento:
          </label>
          <input
            className="input"
            type="number"
            id="descuento"
            name="descuento"
            onChange={handleInputChange}
          />
          <span>{errors.descuento}</span>
        </div>
        <button className="button" type="submit">
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default CrearProducto;
