import React from "react";
import LoginButton from "../../components/IngresarAcceso/login";
import Perfil from "../../components/IngresarAcceso/perfil";
import { useAuth0 } from "@auth0/auth0-react";

const Acceso = ()=>{
    const {user, isAuthenticated} = useAuth0();

    return (
        <>
        {isAuthenticated ? <> < Perfil user={user} autenticado={isAuthenticated}/> </>: < LoginButton />}
        </>
    );
};

export default Acceso;
