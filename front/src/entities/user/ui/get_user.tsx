"use client";
import React, { useEffect } from "react";
import { getUser } from "../api/getUser";

const Get_user = () => {
  useEffect(() => {
    const getUserData = async () => {
      const res = await getUser();
      console.log(res);
    };
    getUserData();
  }, []);

  return <></>;
};

export default Get_user;
