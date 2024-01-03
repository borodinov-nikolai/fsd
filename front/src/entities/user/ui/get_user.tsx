"use client";
import React from "react";
import { useGetUserQuery } from "../api/getUser";


const Get_user = () => {

  const {data} =  useGetUserQuery(undefined)
  
  
  console.log(data)
  return <></>;
};

export default Get_user;
