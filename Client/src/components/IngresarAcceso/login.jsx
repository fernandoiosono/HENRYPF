import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import './login.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div className="btnIngreso"><button onClick={() => loginWithRedirect()}>Ingresar</button></div>;
};

export default LoginButton;