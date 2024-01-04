import { useRouter } from 'next/navigation';
import { useRegistrationMutation } from '../../api/authApi'



const useRegistration = () => {
  const router = useRouter()
    const [registerApi] = useRegistrationMutation()

    const registration = async (
        username: string,
        email: string,
        password: string,
      ) => {
     
        const res = await registerApi({username, email, password})
        if ("data" in res) {
          console.log(res.data)
          localStorage.setItem("token", res.data.jwt)
          router.push('/')
        } else {
          console.log(res.error)
        }
      } 
      ;
  return registration
}

export default useRegistration