"use client";
import React, { useEffect } from "react";
import { useGetUserQuery } from "../api/getUser";

const Get_user = () => {
  const getUserQuery = useGetUserQuery;
  const token = typeof window !== "undefined" && localStorage.getItem("token");

  if (token) {
    const res = getUserQuery(null);
  }

  return <></>;
};

export default Get_user;
