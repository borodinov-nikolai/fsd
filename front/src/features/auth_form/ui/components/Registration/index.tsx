import React, { FC, useEffect } from "react";
import styles from "./Registration.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useRegistration from "@/features/auth_form/lib/hooks/useRegistration";
import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";

interface IOnSubmitFields {
  login: string;
  email: string;
  password: string;
}

interface Props {
  setMode: React.Dispatch<React.SetStateAction<"register" | "auth">>;
}

const Registration: FC<Props> = ({ setMode }) => {
  const registration = useRegistration();

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
      login: "",
      email: "",
      password: "",
    },
  });

  const watcher = watch();

  useEffect(() => {
    clearErrors("root");
  }, [watcher.email, watcher.password, clearErrors]);

  const onSubmit: SubmitHandler<IOnSubmitFields> = async (data) => {
    const { email, password, login } = data;
    const res = await registration({ username: login, email, password });
    const message: string | undefined = (res as any).error?.data?.error
      ?.message;
    if (message === "Email or Username are already taken") {
      setError("root", {
        type: "server",
        message: "Email или Логин уже заняты",
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
      <h1 className={styles.title}>Зарегистрироваться</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs_holder}>
          <Controller
            name="login"
            rules={{ required: "Это поле обязательно" }}
            control={control}
            render={({ field }) => (
              <Input width={"full"} placeholder="Логин..." {...field} />
            )}
          />

          {errors?.login?.message && (
            <div style={{ color: "red" }}>{errors.login.message}</div>
          )}
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
              setMode("auth");
              reset();
            }}
            width={"full"}
            variant={"primary_outlined"}
          >
            Авторизоваться
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
