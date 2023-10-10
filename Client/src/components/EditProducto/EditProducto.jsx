import { useState } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import "./CrearProducto.css";
import axios from "axios";

const EditProdcuto = () => {
  const categorias = useSelector((state) => state.categorias);
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <Formik
      initialValues={{
        name: "",
        imageURL: "",
        description: "",
        price: "",
        stock: "",
        discount: 0,
        active: "",
        CategoryIdCategory: "",
      }}
      validate={(valores) => {
        let errors = {};
        const imageUrlPattern = /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i; // Patrón para imágenes
        if (!valores.name) {
          errors.name = "Ingresa un nombre";
        } else if (valores.name.length < 5 || valores.name.length > 80) {
          errors.name = "El nombre debe tener entre 5 y 80 caracteres";
        }

        if (!valores.description) {
          errors.description = "La descripcion es obligatoria";
        } else if (valores.description.length < 50) {
          errors.description = "La descripcion debe tener minimo 50 caracteres";
        }

        if (valores.stock < 1) {
          errors.stock = "El stock debe ser mayor a 0";
        }

        if (valores.discount < 0) {
          errors.discount = "El descuento no puede ser menor a 0%";
        } else if (valores.discount > 100) {
          errors.discount = "El descuento no puede ser mayor al 100%";
        }

        if (valores.CategoryIdCategory === "") {
          errors.CategoryIdCategory = "Debes seleccionar una categoria";
        }

        if (valores.active === "") {
          errors.active = "Debes seleccionar si el producto estara activo o no";
        }

        if (valores.price < 1) {
          errors.price = "El precio debe ser mayor a 0";
        }
        return errors;
      }}
      onSubmit={async (values, { resetForm }) => {
        const imageUrlPattern = /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i; // Patrón para imágenes
        if (values.active === "true") {
          values.active = true;
        } else if (values.active === "false") {
          values.active = false;
        }

        if (!imageUrlPattern.test(values.imageURL)) {
          values.imageURL =
            "https://static.wikia.nocookie.net/fakemon/images/3/37/Logo_PAAA_Toy_Story_Parody.png";
        }

        values.CategoryIdCategory = +values.CategoryIdCategory;

        try {
          const response = await axios.post(
            "http://localhost:3001/moveon/products",
            values
          );

          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 3000);
          resetForm();
        } catch (error) {
          console.log(response.error.message);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <div className="contenedor">
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="imageURL">Imagen: </label>
              <input
                // type="file"
                type="text"
                id="imageURL"
                name="imageURL"
                placeholder="Inserta una imagen"
                value={values.imageURL}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.imageURL && errors.imageURL && (
                <div className="error">{errors.imageURL}</div>
              )}
            </div>
            <div>
              <label htmlFor="description">Descripcion:</label>
              <textarea
                type="text"
                id="description"
                name="description"
                rows="5"
                cols="33"
                placeholder="Escribe la descripcion del producto"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {touched.description && errors.description && (
                <div className="error">{errors.description}</div>
              )}
            </div>
            <div>
              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                placeholder="0"
                value={values.stock}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.stock && errors.stock && (
                <div className="error">{errors.stock}</div>
              )}
            </div>
            <div>
              <label htmlFor="discount">Descuento:</label>
              <input
                type="text"
                id="discount"
                name="discount"
                placeholder="0"
                value={values.discount}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.discount && errors.discount && (
                <div className="error">{errors.discount}</div>
              )}
            </div>
            <div>
              <label htmlFor="CategoryIdCategory">Categoria:</label>
              <select
                id="CategoryIdCategory"
                value={values.CategoryIdCategory}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Selecciona una categoria...</option>
                {categorias.map((opcion, index) => (
                  <option key={index} value={opcion.idCategory}>
                    {opcion.name}
                  </option>
                ))}
              </select>
              {touched.CategoryIdCategory && errors.CategoryIdCategory && (
                <div className="error">{errors.CategoryIdCategory}</div>
              )}
            </div>
            <div>
              <label htmlFor="active">Active:</label>
              <select
                id="active"
                value={values.active}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value={""}>
                  ¿Quieres que el producto este activo?
                </option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
              {touched.active && errors.active && (
                <div className="error">{errors.active}</div>
              )}
            </div>
            <div>
              <label htmlFor="price">Precio:</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="0"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.price && errors.price && (
                <div className="error">{errors.price}</div>
              )}
            </div>
            <button type="submit">Crear producto</button>
            {formularioEnviado && <p className="exito">Producto creado!</p>}
          </form>
        </div>
      )}
    </Formik>
  );
};

export default EditProdcuto;
