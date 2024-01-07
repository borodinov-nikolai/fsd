import { useRouter } from "next/navigation";
import { useAuthorizationMutation } from "../../api/authApi";

const useAuthorization = () => {
  const router = useRouter();
  const [authApi, status] = useAuthorizationMutation();

  const autorization = async ({
    identifier,
    password,
  }: {
    identifier: string;
    password: string;
  }) => {
    const res = await authApi({ identifier, password });
    if ("data" in res) {
      localStorage.setItem("token", res.data.jwt);
      localStorage.setItem("is_auth", "true");
      router.push("/");
    }
    return res;
  };

  return autorization;
};

export default useAuthorization;
