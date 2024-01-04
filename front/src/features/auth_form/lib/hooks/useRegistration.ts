import { useRegistrationMutation } from '../../api/authApi'



const useRegistration = () => {
    const [registerApi] = useRegistrationMutation()

    const registration = async (
        username: string,
        email: string,
        password: string,
      ) => {
     
        const res = await registerApi({username, email, password})
        if ("data" in res) {
          console.log(res.data)
          // localStorage.setItem("token", res.data.jwt)
        } else {
          console.log(res.error)
        }
      } 
      ;
  return registration
}

export default useRegistration