import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Perfil = () => {
  const { user, isAuthenticated, cargando } = useAuth0();

  if (cargando) {
    return <div>cargando...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Perfil;