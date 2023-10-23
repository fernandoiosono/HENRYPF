import React from "react";
import LogoutButton from "../IngresarAcceso/logout";
import SubirImagen from "../Cloudinary/cloudinary.component";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editarUsuario } from "../../redux/actions";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./perfil.css";

const Perfil = ({ autenticado }) => {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.usuario);
  const [imagen, setImagen] = useState("");
  const [errorsUser, setErrorsUsers] = useState(false);

  const modificar = (valores) => {
    if (autenticado) {
      dispatch(editarUsuario(valores));
      setErrorsUsers(false);
    }
  };

  const validar = (valores) => {
    const errors = {};
    if (valores.name.length > 35)
      errors.name = "Debe contener menos de 35 letras";
    if (valores.nickName.length > 35)
      errors.nickName = "Debe contener menos de 35 letras";
    const hasError = Object.keys(errors).length > 0;
    setErrorsUsers(hasError);
    return errors;
  };

  return (
    <>
      {usuario.data ? (
        <div className="perfil">
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
            <div className="contenedor">
              <Form className="formulario">
                <h1 className="titulo">Bienvenido {usuario.data.nickName}</h1>
                <img
                  src={usuario.data.imageURL}
                  alt="imagen del usuario"
                  className="imagen"
                />
                <div className="cloudinary">
                  <label htmlFor="clou_Imagen" className="cambiarImg">
                    Cambiar Imagen:
                  </label>
                  <div>
                    <SubirImagen setImagen={setImagen} />
                  </div>
                </div>

                <div className="formulario__grupo">
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
                    <div className="error_msg_user">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                </div>

                <div className="formulario__grupo">
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
                    <div className="error_msg_user">
                      <ErrorMessage name="nickName" />
                    </div>
                  </div>
                </div>

                <div className="formulario__grupo">
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
                {errorsUser ? (
                  <></>
                ) : (
                  <>
                    <div className="btn_user">
                      <button
                        type="submit"
                        className={errorsUser ? "disabled_btn_user" : ""}
                      >
                        Enviar cambios
                      </button>
                    </div>
                  </>
                )}
              </Form>
              <div className="btn_out">
                <LogoutButton />
              </div>
            </div>
          </Formik>
        </div>
      ) : null}
    </>
  );
};

export default Perfil;
