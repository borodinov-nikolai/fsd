import { useAuthorizationMutation, useRegistrationMutation } from "../api/authApi";


const [registerApi] = useRegistrationMutation();
const [authApi] = useAuthorizationMutation();


export const registrationService = async (
    username: string,
    email: string,
    password: string,
  ) => {
 
    const res = await registerApi({username, email, password})
    if ("data" in res) {
      console.log(res.data)
      localStorage.setItem("token", res.data.jwt)
    } else {
      console.log(res.error)
    }
  } 
  ;


 export const authorizationService = async (
    identifier: string,
    password: string,
  ) => {
 
    const res = await authApi({identifier, password})
    if ("data" in res) {
      console.log(res.data)
      localStorage.setItem("token", res.data.jwt)
    } else {
      console.log(res.error)
    }
  } 
  ;