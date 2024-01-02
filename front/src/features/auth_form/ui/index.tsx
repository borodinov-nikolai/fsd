"use client";
import React, { useEffect, useState } from "react";
import styles from "./Auth_form.module.scss";
import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";
import { register } from "../api/auth";

const Auth_form = () => {
  const [mode, setMode] = useState<"auth" | "register">("auth");
  const [login, setLogin] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const registration = async (
    login: string,
    mail: string,
    password: string,
  ) => {
    const res = await register(login, mail, password);
    localStorage.setItem("token", res?.data?.jwt);
    console.log(res?.data.jwt);
  };

  if (mode === "auth") {
    return (
      <div className={styles.root}>
        <h1 className={styles.title}>Войти</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.inputs_holder}>
          <Input
            width={"full"}
            onChange={(e) => setMail(e.target.value)}
            placeholder="E-mail..."
          />
          <Input
            width={"full"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль..."
          />
        </div>
        <div className={styles.buttons_holder}>
          <Button width={"full"} type={"primary"}>
            Продожить
          </Button>
          <Button
            onClick={() => setMode("register")}
            width={"full"}
            type={"primary_outlined"}
          >
            Зарегистрироваться
          </Button>
        </div>
        <div className={styles.politics}>
          Нажимая на кнопку “Продолжить”, вы соглашаетесь с{" "}
          <span>политикой конфиденциальности</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.root}>
        <h1 className={styles.title}>Зарегистрироваться</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.inputs_holder}>
          <Input
            width={"full"}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Логин..."
          />
          <Input
            width={"full"}
            onChange={(e) => setMail(e.target.value)}
            placeholder="E-mail..."
          />
          <Input
            width={"full"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль..."
          />
        </div>
        <div className={styles.buttons_holder}>
          <Button
            onClick={() => registration(login, mail, password)}
            width={"full"}
            type={"primary"}
          >
            Продожить
          </Button>
          <Button
            onClick={() => setMode("auth")}
            width={"full"}
            type={"primary_outlined"}
          >
            Авторизоваться
          </Button>
        </div>
        <div className={styles.politics}>
          Нажимая на кнопку “Продолжить”, вы соглашаетесь с{" "}
          <span>политикой конфиденциальности</span>
        </div>
      </div>
    );
  }
};

export default Auth_form;
