import React from "react";
import LogoutButton from "../IngresarAcceso/logout";
import SubirImagen from "../Cloudinary/cloudinary.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { crearUsuario, editarUsuario } from "../../redux/actions";
import { Formik, Form, Field } from "formik";

import "./perfil.css";

const Perfil = ({ user, autenticado }) => {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.usuario);

  const newUsuario = {
    idAuth0: user.sub,
    name: user.name,
    nickName: user.nickname,
    email: user.email,
    imageURL: user.picture,
  };

  useEffect(() => {
    if (autenticado) {
      dispatch(crearUsuario(newUsuario));
    }
  }, []);

  const modificar = (cambiosUser) => {
    if (autenticado) {
          dispatch(editarUsuario(cambiosUser));
        }
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
              imageURL: usuario.data.imageURL,
              email:usuario.data.email,
            }}
            onSubmit={modificar}
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
                  <label htmlFor="name" className="cambiarImg">
                    Cambiar Imagen:
                  </label>
                  <SubirImagen/>
                </div>

                <div className="formulario__grupo">
                  <label htmlFor="name" className="txt">
                    Nombre
                  </label>
                  <div className="txt">
                    <Field
                      className="txt_info"
                      id="name"
                      name="name"
                      type="text"
                      placeholder={usuario.data.name}
                      autoComplete="off"
                    />
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
                <button type="submit" className="btn" >
                  Enviar cambios
                </button>
                <div>
                  <LogoutButton />
                </div>
              </Form>
            </div>
          </Formik>
        </div>
      ) : null}
    </>
  );
};

export default Perfil;
