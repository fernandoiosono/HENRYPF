import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const logout_uri = process.env.LOGOUT_URI;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: logout_uri } })}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;