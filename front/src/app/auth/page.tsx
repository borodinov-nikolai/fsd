import React from "react";
import styles from "./Auth.module.scss";
import Image from "next/image";
import icon_logo from "@/shared/assets/icons/logo_white.png";
import { Auth_form } from "@/features/auth_form";

const Auth = () => {
  return (
    <div className={styles.root}>
      <div className={styles.leftBlock}>
        <div className={styles.leftBlock_blueFilter}>
          <Image src={icon_logo} width={335} height={70} alt="logo" />
        </div>
      </div>
      <div className={styles.rightBlock}>
        <Auth_form />
      </div>
    </div>
  );
};

export default Auth;
