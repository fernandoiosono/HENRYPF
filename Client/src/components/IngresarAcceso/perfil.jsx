import React from "react";
import LogoutButton from "../IngresarAcceso/logout";
import SubirImagen from '../Cloudinary/cloudinary.component'
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {crearUsuario} from "../../redux/actions";
import "./perfil.css";

const Perfil = ({user, autenticado}) => {
  const dispatch = useDispatch();
  // const usuario = useSelector((state) => state.usuario);

  // console.log("nuevo usuario" , usuario.data)

   const newUsuario = {
    idAuth0: user.sub,
    nickName : user.nickname,
    email : user.email,
    imageURL: user.picture,
   }

   useEffect(() => {
    if(autenticado){
    dispatch(crearUsuario(newUsuario));}
  });
  
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
      <div className="perfil">
        <img src={user.picture} alt={user.name} className="imagen" />
        <div className="cloudinary">
          <h3 className="cambiarImg">Cambiar Imagen:</h3>
          < SubirImagen/>
        </div>
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
  );
};

export default Perfil;