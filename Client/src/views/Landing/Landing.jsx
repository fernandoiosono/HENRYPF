import React from "react";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logoOff from "../../assets/img/logoAntes/logoAntes.png";
import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  const handlerBtn =()=>{
    navigate("/home");
  }
  return (
    <>
        {/* <NavLink to="/home"> */}
          <div className={style.img_logo}>
           <img src={logoOff} alt="logoOff" className={style.logoOff} onClick={handlerBtn}/>
          </div>
        {/* </NavLink> */}
    </>
  );
};

export default Landing;
