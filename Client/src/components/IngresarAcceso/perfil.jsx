import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../IngresarAcceso/logout";

import "./perfil.css";

const Perfil = () => {
  const { user, isAuthenticated, cargando } = useAuth0();

  if (cargando) {
    return <div>cargando...</div>;
  }

  return (
    isAuthenticated && (
      <div className="perfil">
        <img src={user.picture} alt={user.name} className="imagen" />
        <div className="div_txt">
          <h1 className="titulo">Bienvenido {user.given_name}</h1>
          <h3 className="txt">Nombre</h3>
          <p className="txt_info">{user.name}</p>
          <h3 className="txt">Correo</h3>
          <p className="txt_info">{user.email}</p>
          <h3 className="txt">Usuario</h3>
          <p className="txt_info">{user.nickname}</p>
          <div className="btn">
            <LogoutButton />
          </div>
        </div>
      </div>
    )
  );
};

export default Perfil;
