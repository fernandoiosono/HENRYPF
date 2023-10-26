import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./login.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    // <div className="btnLogOut">
    //   <button onClick={() => loginWithRedirect()}>Ingresar</button>
    // </div>
    <div
      className="buttonEliminar"
      role="button" // Añade un atributo de rol para indicar que es un botón
      onClick={() => loginWithRedirect()}
    >
      Ingresar
    </div>
  );
};

export default LoginButton;
