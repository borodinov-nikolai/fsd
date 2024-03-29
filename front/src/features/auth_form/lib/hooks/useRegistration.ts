import { useRouter } from "next/navigation";
import { useRegistrationMutation } from "../../api/authApi";

const useRegistration = () => {
  const router = useRouter();
  const [registerApi] = useRegistrationMutation();

  const registration = async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    const res = await registerApi({ username, email, password });
    if ("data" in res) {
      localStorage.setItem("token", res.data.jwt);
      localStorage.setItem("is_auth", "true");
      router.push("/");
    }
    return res;
  };

  return registration;
};

export default useRegistration;
