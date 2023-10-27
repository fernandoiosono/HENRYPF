import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const logout_uri = process.env.LOGOUT_URI;
import "./logout.css";
const LogoutButton = ({ setActualizar }) => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn_logout"
      onClick={() => {
        setActualizar(false);
        logout({ logoutParams: { returnTo: logout_uri } });
      }}
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
