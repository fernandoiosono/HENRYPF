import React from "react";
import LoginButton from "../../components/IngresarAcceso/login";
import LogoutButton from "../../components/IngresarAcceso/logout";
import Perfil from "../../components/IngresarAcceso/perfil";
import { useAuth0 } from "@auth0/auth0-react";

const Acceso = ()=>{
    const {isAuthenticated} = useAuth0();
    
    // useEffect(()=>{
    //     if(isAuthenticated){
    //         dispatch(accionverificarrol)
    //     }
    // }, [isAuthenticated]);

    // useEffect(()=>{
    //     if(administrador){
    //         redirect, window.
    //     }
    // }, [rol]);

    return (
        <>
        <h1>Accede al equipo MoveOn</h1>
        {isAuthenticated ? <> < Perfil /> < LogoutButton /> </>: < LoginButton />}
        </>
    );
};

export default Acceso;
