import { useRouter } from 'next/navigation';
import { useAuthorizationMutation, useRegistrationMutation } from '../../api/authApi'



const useAuthorization = () => {
  const router = useRouter()
    const [authApi] = useAuthorizationMutation()

    const autorization = async (
        identifier: string,
        password: string,
      ) => {
     
        const res = await authApi({identifier, password})
        if ("data" in res) {
          console.log(res)
          localStorage.setItem("token", res.data.jwt)
          localStorage.setItem("is_auth", 'true')
          router.push('/')
        } else {
          console.log(res.error)
        }
      } 
      ;
  return autorization
}

export default useAuthorization