import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Formik } from "formik";
import SubirImagen from "../Cloudinary/cloudinary.component";
import "./CrearProducto.css";
import { createProduct, traerAllProductos } from "../../redux/actions.js";
import Swal from "sweetalert2";

const CrearProducto = () => {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categorias);
  const [imagen, setImagen] = useState("");
  const [hasErrors, setHasErrors] = useState(true);

  return (
    <Formik
      initialValues={{
        name: "",
        imageURL: "" || imagen,
        description: "",
        price: 0,
        stock: 0,
        discount: 0,
        active: "",
        CategoryIdCategory: "",
      }}
      validate={(valores) => {
        let errors = {};
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

        if (valores.CategoryIdCategory === "") {
          errors.CategoryIdCategory = "Debes seleccionar una categoria";
        }

        if (valores.active === "") {
          errors.active = "Debes seleccionar si el producto estara activo o no";
        }

        if (valores.price < 1) {
          errors.price = "El precio debe ser mayor a 0";
        }

        if (imagen == "") {
          errors.imageURL = "NO HAY IMAGEN";
        }

        const hasAnyError = Object.keys(errors).length > 0;
        setHasErrors(hasAnyError);

        return errors;
      }}
      onSubmit={async (values, { resetForm }) => {
        if (values.active === "true") {
          values.active = true;
        } else if (values.active === "false") {
          values.active = false;
        }
        values.imageURL = imagen;

        Swal.fire({
          title: "¿Quieres crear este producto?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, crearlo!",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(createProduct(values));
            dispatch(traerAllProductos());
            setHasErrors(true);
            resetForm();
          }
        });
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
              <SubirImagen setImagen={setImagen} />
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
              <select
                id="discount"
                name="discount"
                value={values.discount}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="0">0</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select>
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

            {hasErrors ? (
              <></>
            ) : (
              <>
                <button
                  type="submit"
                  className={hasErrors ? "disabled-button" : ""}
                >
                  Crear producto
                </button>
              </>
            )}
          </form>
        </div>
      )}
    </Formik>
  );
};

export default CrearProducto;
