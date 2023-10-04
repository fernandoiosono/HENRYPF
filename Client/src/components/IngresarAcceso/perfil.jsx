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
      <div className="fondo">
        <div className="perfil">
          <div>
            <img src={user.picture} alt={user.name} className="imagen" />
          </div>
          <div>
            <h1 className="titulo">Bienvenido {user.given_name}</h1>
          </div>
          <div>
            <h3>Nombre</h3>
            <p>{user.name}</p>
          </div>
          <div>
            <h3>Correo</h3>
            <p>{user.email}</p>
          </div>
          <div>
            <h3>Usuario</h3>
            <p>{user.nickname}</p>
          </div>
          <div className="btn">
          < LogoutButton/>
          </div>
        </div>
      </div>
    )
  );
};

export default Perfil;
