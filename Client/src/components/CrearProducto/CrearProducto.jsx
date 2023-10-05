import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CrearProducto.css";
import axios from "axios";

const CrearProducto = () => {
  const categorias = useSelector((state) => state.categorias);
  const [formData, setFormData] = useState({
    name: "",
    imageURL: "",
    description: "",
    price: "",
    stock: 1,
    discount: 0,
    active: true,
    CategoryIdCategory: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    imageURL: "",
    description: "",
    price: "",
    stock: "",
    discount: "",
    active: true,
    CategoryIdCategory: "",
  });

  const handleCategoriasformChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setFormData({
      ...formData,
      CategoryIdCategory: value,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};
    const {
      name,
      imageURL,
      description,
      price,
      stock,
      discount,
      CategoryIdCategory,
    } = formData;

    if (name.length < 5 || name.length >= 80) {
      validationErrors["name"] =
        "Este campo debe tener entre 5 y 79 caracteres.";
    } else {
      delete validationErrors["name"];
    }

    const imageUrlPattern = /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i; // Patrón para imágenes
    if (imageUrlPattern.test(imageURL)) {
    } else {
      formData["imageURL"] =
        "https://static.wikia.nocookie.net/fakemon/images/3/37/Logo_PAAA_Toy_Story_Parody.png";
    }

    if (description.length < 50) {
      validationErrors["description"] =
        "La descripcion debe tener minimo 50 caracteres";
    } else {
      delete validationErrors["description"];
    }

    if (price <= 0) {
      validationErrors["price"] = "El precio debe ser mayor a 0";
    }

    if (stock == "") {
      formData["stock"] = 1;
    } else if (stock <= 0) {
      validationErrors["stock"] = "El stock debe ser mayor a 0";
    }

    if (discount == "") {
      formData["discount"] = 0;
    } else if (discount < 0) {
      validationErrors["discount"] = "El discount debe ser minimo 0";
    }

    if (CategoryIdCategory.length === 0) {
      validationErrors["CategoryIdCategory"] = "Debe seleccionar una categoria";
    } else {
      delete validationErrors["CategoryIdCategory"];
    }

    console.log(formData);
    formData["price"] = +formData["price"];
    formData["CategoryIdCategory"] = +formData["CategoryIdCategory"];
    formData["discount"] = +formData["discount"];
    formData["stock"] = +formData["stock"];
    console.log(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3001/moveon/products",
          formData
        );

        alert("Producto creado");
        setFormData({
          name: "",
          imageURL: "",
          description: "",
          price: "",
          stock: 1,
          discount: 0,
          active: true,
          CategoryIdCategory: "",
        });
      } catch (error) {
        console.log(error.message);
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
          {errors.name ? <span>{errors.name}</span> : null}
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
            name="Category"
            value={formData.CategoryIdCategory}
            onChange={handleCategoriasformChange}
          >
            {categorias.map((opcion, index) => (
              <option key={index} value={opcion.idCategory}>
                {opcion.name}
              </option>
            ))}
          </select>
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
