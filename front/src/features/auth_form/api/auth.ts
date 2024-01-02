import { $cms_api } from "@/shared/api/axios_instances";

export const register = async (
  username: string,
  email: string,
  password: string,
) => {
  try {
    const res = await $cms_api.post("/auth/local/register", {
      username: String(username),
      email: String(email),
      password: String(password),
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};
