import { useRouter } from "next/navigation";

export default function useLogout() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("is_auth");
    localStorage.removeItem("token");
    router.push("/");
  };

  return logout;
}
