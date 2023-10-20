import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { 
      // returnTo: "https://henrypf-production-c75d.up.railway.app/catalogo"
      returnTo: "http://127.0.0.1:5173/catalogo" 
      } })}>
      x
    </button>
  );

};

export default LogoutButton;