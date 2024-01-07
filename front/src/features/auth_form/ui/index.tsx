"use client";
import React, {useState } from "react";
import styles from "./Auth_form.module.scss";
import Authorization from "./components/Authorization";
import Registration from "./components/Registration";



const Auth_form = () => {
  const [mode, setMode] = useState<"auth" | "register">("auth");


    return (
    <div className={styles.root} >

   
         {
         mode ==='auth'? 
         <Authorization setMode={setMode} /> :
          <Registration setMode={setMode} />
          }
      
        <div className={styles.politics}>
          Нажимая на кнопку “Продолжить”, вы соглашаетесь с{" "}
          <span>политикой конфиденциальности</span>
        </div>
        </div>
   )

  
};

export default Auth_form;
