"use client";
import React, { useState } from "react";
import styles from "./PersonalInformation.module.scss";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { useGetUserQuery } from "@/entities/user";
import useLogout from "../lib/hooks/useLogOut";
import { usePutUserInfoMutation } from "../api/UserInfoApi";

const Personal_information = () => {
  const [legal_entity, setLegal_entity] = useState<boolean>();
  const [phone_number, setPhone_Number] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [birthday, setBirthday] = useState<string>();
  const [name, setName] = useState<string>();
  const logout = useLogout();
  const { data: user, isLoading } = useGetUserQuery(null);
  const [putUserInfo, { isError }] = usePutUserInfoMutation();

  const user_id = user?.id;
  const user_login = user?.username;
  const user_name = user?.name;
  const user_phoneNumber = user?.phone_number;
  const user_birthday = user?.birthday;
  const user_email = user?.email;
  const user_entity = user?.legal_entity;

  const handleSaveClick = async () => {
    const res = await putUserInfo({
      user_id,
      body: { name, phone_number, email, birthday, legal_entity },
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <div className={styles.head_greeting}>
          <h1 className={styles.head_name}>
            Привет,{" "}
            <span>
              {!isLoading &&
                user_login &&
                user_login[0].toUpperCase() + user?.username.slice(1)}
            </span>
          </h1>
          <p className={styles.head_phoneNumber}>
            {!isLoading && user_phoneNumber}
          </p>
        </div>
        <div onClick={() => logout()} className={styles.head_leaveBtn}>
          Выйти из аккаунта
        </div>
      </div>

      <div className={styles.userInfo}>
        <h2 className={styles.userInfo_title}>Личные данные:</h2>
        <div className={styles.userInfo_personChange}>
          <div className={styles.userInfo_person}>
            <Button
              onClick={() => setLegal_entity(false)}
              width={"full"}
              variant={
                !user
                  ? "default"
                  : legal_entity ?? user_entity
                    ? "default"
                    : "primary"
              }
            >
              Физическое лицо
            </Button>
          </div>
          <div className={styles.userInfo_person}>
            <Button
              onClick={() => setLegal_entity(true)}
              width={"full"}
              variant={
                !user
                  ? "default"
                  : legal_entity ?? user_entity
                    ? "primary"
                    : "default"
              }
            >
              Юридическое лицо
            </Button>
          </div>
        </div>
        <div className={styles.userInfo_personalaData}>
          <div className={styles.userInfo_itemsHolder}>
            <div className={styles.userInfo_name}>
              <p>Имя</p>
              <Input
                onChange={(e) => setName(e.target.value)}
                defaultValue={user_name}
                placeholder="Имя"
              />
            </div>
            <div className={styles.userInfo_birthday}>
              <p>Дата рождения</p>
              <Input
                onChange={(e) => setBirthday(e.target.value)}
                defaultValue={user_birthday}
                placeholder="Дата"
              />
            </div>
            <div className={styles.userInfo_text}>
              <p>Добавьте дату рождения и получите скидку в праздник.</p>
            </div>
          </div>
          <div className={styles.userInfo_itemsHolder}>
            <div className={styles.userInfo_number}>
              <p>Телефон</p>
              <Input
                defaultValue={user_phoneNumber}
                onChange={(e) => setPhone_Number(e.target.value)}
                placeholder="Телефон"
              />
            </div>
            <div className={styles.userInfo_email}>
              <p>Эл. Почта</p>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={user_email}
                placeholder="Эл. Почта"
              />
            </div>
            <div className={styles.userInfo_saveBtn}>
              <Button
                onClick={handleSaveClick}
                width={388}
                height={60}
                variant={"primary"}
              >
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal_information;
