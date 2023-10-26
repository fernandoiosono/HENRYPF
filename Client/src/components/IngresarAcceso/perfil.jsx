import React, { useEffect } from "react";
import LogoutButton from "../IngresarAcceso/logout";
import SubirImagen from "../Cloudinary/cloudinary.component";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editarUsuario } from "../../redux/actions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Louder from "../Louder/louder";

import "./perfil.css";

const Perfil = ({ autenticado }) => {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.usuario);
  const [imagen, setImagen] = useState("");
  const [errorsUser, setErrorsUsers] = useState(false);
  const [loading, setLoading] = useState(false);
  const [actualizar, setActualizar] = useState(true);

  const modificar = (valores) => {
    if (autenticado && actualizar) {
      dispatch(editarUsuario(valores));
      setErrorsUsers(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const validar = (valores) => {
    const errors = {};
    if (valores.name.length === 0) {
      errors.name = "El nombre no puede estar vacio";
    }
    if (valores.name.length > 35)
      errors.name = "Debe contener menos de 35 letras";

    if (valores.nickName.length === 0) {
      errors.nickName = "El nickName no puede estar vacio";
    }
    if (valores.nickName.length > 35)
      errors.nickName = "Debe contener menos de 35 letras";
    const hasError = Object.keys(errors).length > 0;
    setErrorsUsers(hasError);
    return errors;
  };

  return (
    <>
      {loading ? (
        <Louder />
      ) : usuario.data ? (
        <div className="perfil3">
          <Formik
            enableReinitialize
            initialValues={{
              idUser: usuario.data.idUser,
              name: usuario.data.name,
              nickName: usuario.data.nickName,
              imageURL: imagen || usuario.data.imageURL,
              email: usuario.data.email,
            }}
            onSubmit={modificar}
            validate={validar}
          >
            <div className="contenedor3">
              <Form className="formulario3">
                <div>
                  <h1 className="titulo">Bienvenido {usuario.data.nickName}</h1>
                  <div className="content">
                    <img
                      src={usuario.data.imageURL}
                      alt="imagen del usuario"
                      className="imagen3"
                    />
                  </div>
                  <div className="cloudinary3">
                    <label htmlFor="clou_Imagen" className="cambiarImg">
                      Cambiar Imagen:
                    </label>
                    <div>
                      <SubirImagen setImagen={setImagen} />
                    </div>
                  </div>

                  <div className="formulario__grupo3">
                    <label htmlFor="name">Nombre</label>
                    <div>
                      <Field
                        className="txt_info"
                        id="name"
                        name="name"
                        type="text"
                        placeholder={usuario.data.name}
                        autoComplete="off"
                      />
                      <div className="error_msg_user3">
                        <ErrorMessage name="name" />
                      </div>
                    </div>

                    <label htmlFor="nickName" className="txt">
                      Nombre de usuario
                    </label>
                    <div className="txt">
                      <Field
                        className="txt_info"
                        id="nickName"
                        name="nickName"
                        type="text"
                        placeholder={usuario.data.nickName}
                        autoComplete="off"
                      />
                      <div className="error_msg_user3">
                        <ErrorMessage name="nickName" />
                      </div>
                    </div>

                    <label htmlFor="email" className="txt">
                      Correo
                    </label>
                    <div className="txt">
                      <Field
                        className="txt_info"
                        id="email"
                        name="email"
                        type="text"
                        placeholder={usuario.data.email}
                        autoComplete="off"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                {errorsUser ? (
                  <div className="botones">
                    <button
                      type="button"
                      disabled
                      className="disabled_btn_user"
                    >
                      Enviar cambios
                    </button>

                    <LogoutButton setActualizar={setActualizar} />
                  </div>
                ) : (
                  <>
                    <div className="botones">
                      <button className="btn_user" type="submit">
                        Enviar cambios
                      </button>
                      <LogoutButton setActualizar={setActualizar} />
                    </div>
                  </>
                )}
              </Form>
            </div>
          </Formik>
        </div>
      ) : null}
    </>
  );
};

export default Perfil;
