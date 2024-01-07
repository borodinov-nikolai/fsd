"use client";
import React, { FC, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./Authorization.module.scss";
import useAuthorization from "@/features/auth_form/lib/hooks/useAuthorization";
import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";

interface IOnSubmitFields {
  email: string;
  password: string;
}

interface Props {
  setMode: React.Dispatch<React.SetStateAction<"register" | "auth">>;
}

const Authorization: FC<Props> = ({ setMode }) => {
  const authorization = useAuthorization();
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setError,
  } = useForm<IOnSubmitFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const watcher = watch();

  useEffect(() => {
    clearErrors("root");
  }, [watcher.email, watcher.password, clearErrors]);

  const onSubmit: SubmitHandler<IOnSubmitFields> = async (data) => {
    const { email, password } = data;
    const res = await authorization({ identifier: email, password });
    const message: string | undefined = (res as any).error?.data?.error
      ?.message;
    if (message === "Invalid identifier or password") {
      setError("root", {
        type: "server",
        message: "Неверный логин или пароль",
      });
    } else if (message === "Too many requests, please try again later.") {
      setError("root", {
        type: "server",
        message: "Слишком много попыток, пожалуйста повторите позже",
      });
    } else if (message) {
      setError("root", {
        type: "server",
        message: message,
      });
    }
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Войти</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs_holder}>
          <Controller
            name="email"
            rules={{
              required: "Это поле обязательно",
              pattern: {
                value:
                  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: " Пожалуйста введите корректный email",
              },
            }}
            control={control}
            render={({ field }) => (
              <Input width={"full"} placeholder="E-mail..." {...field} />
            )}
          />

          {errors?.email?.message && (
            <div style={{ color: "red" }}>{errors.email.message}</div>
          )}

          <Controller
            name="password"
            rules={{
              required: "Это поле обязательно",
              minLength: {
                value: 6,
                message: "Длина пароля должна быть не менее 6 символов",
              },
            }}
            control={control}
            render={({ field }) => (
              <Input width={"full"} placeholder="Пароль..." {...field} />
            )}
          />

          {errors.root?.message ? (
            <div style={{ color: "red" }}>{errors.root.message}</div>
          ) : (
            errors.password?.message && (
              <div style={{ color: "red" }}>{errors.password.message}</div>
            )
          )}
        </div>
        <div className={styles.buttons_holder}>
          <Button type="submit" width={"full"} variant={"primary"}>
            Продожить
          </Button>
          <Button
            onClick={() => {
              setMode("register");
              reset();
            }}
            width={"full"}
            variant={"primary_outlined"}
          >
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Authorization;
