import React from "react";
import styles from "./Profile.module.scss";
import { Personal_information } from "@/features/personal_information";
import { Purchase_history } from "@/features/purchase_history";

const Profile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.personalInformation}>
        <Personal_information />
      </div>
      <div className={styles.purchaseHistory}>
        <Purchase_history />
      </div>
    </div>
  );
};

export default Profile;
