import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoOff from "../../assets/img/logoAntes/logoAntes.png";
import logoOn from "../../assets/img/logo/logo.png";
import fondo from "../../assets/img/landing/fondoLanding.jpg"
import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  const [logo, setLogo] = useState(logoOff); 
  const [background, setBackground] = useState(""); 

  const handlerBtn =()=>{
    setLogo(logoOn);
    setBackground(fondo);
    setTimeout(() => { 
      navigate("/home"); }, 2000); 
  }

  useEffect(() => { 
    document.body.style.backgroundImage = background;
   }, [background]); 

  return (
    <>
          <div className={style.img_logo}>
           <img src={logo} alt="logo" className={style.logo} onClick={handlerBtn}/>
           <h1 className={style.txt_tienda}>Tienda virtual</h1>
          </div>
    </>
  );
};

export default Landing;
