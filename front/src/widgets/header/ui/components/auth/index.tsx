"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Auth.module.scss";

const Auth = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const is_auth =
    typeof window !== "undefined" && localStorage.getItem("is_auth");

  useEffect(() => {
    setIsLoading(true);
    if (is_auth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setIsLoading(false);
  }, [is_auth]);

  if (!isLoading) {
    return (
      <Link
        className={styles.root}
        {...props}
        href={isAuth ? "/account" : "/auth"}
      >
        {isAuth ? "Личный кабинет" : "Авторизация"}
      </Link>
    );
  }
};

export default Auth;
