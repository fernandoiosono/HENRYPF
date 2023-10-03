import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CrearProducto.css";

const CrearProducto = () => {
  const categorias = useSelector((state) => state.categorias); //Trae desde el estado global la lista de categorias
  const [formData, setFormData] = useState({
    name: "",
    imageURL: "",
    description: "",
    price: "",
    stock: 0,
    discount: 0,
    categorias: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    imageURL: "",
    description: "",
    price: "",
    stock: "",
    discount: "",
    categorias: [],
  });

  const handleCategoriasformChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      categorias: [...formData.categorias, value],
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name + " " + value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    const { name, imageURL, description, price, stock, discount, active } =
      this.state;
    event.preventDefault();
    const validationErrors = {};

    for (const key in validationErrors) {
      if (Object.hasOwnProperty.call(validationErrors, key)) {
        delete validationErrors[key];
      }
    }

    for (const key in formData) {
      console.log(formData[key]);
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
          name: "",
          imageURL: "",
          description: "",
          price: "",
          stock: 0,
          discount: 0,
          categorias: [],
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
            name="name"
            onChange={handleInputChange}
          />
          <span>{errors.name}</span>
        </div>
        <div>
          <label className="label" htmlFor="imagen">
            Imagen:
          </label>
          <input
            className="input"
            type="text"
            id="imagen"
            name="imageURL"
            onChange={handleInputChange}
          />
          <span>{errors.imageURL}</span>
        </div>
        <div>
          <label className="label" htmlFor="descripcion">
            Descripción:
          </label>
          <textarea
            className="textarea"
            id="descripcion"
            name="description"
            onChange={handleInputChange}
          ></textarea>
          <span>{errors.description}</span>
        </div>

        <div>
          <label className="label">Categorias:</label>
          <select
            multiple
            name="categorias"
            value={formData.categorias}
            onChange={handleCategoriasformChange}
          >
            {categorias.map((opcion, index) => (
              <option key={index} value={opcion.name}>
                {opcion.name}
              </option>
            ))}
          </select>
          <span>{errors.platforms}</span>
        </div>

        <div>
          <label className="label" htmlFor="precio">
            Precio:
          </label>
          <input
            className="input"
            type="number"
            id="precio"
            name="price"
            onChange={handleInputChange}
          />
          <span>{errors.price}</span>
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
            name="discount"
            onChange={handleInputChange}
          />
          <span>{errors.discount}</span>
        </div>
        <button className="button" type="submit">
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default CrearProducto;
