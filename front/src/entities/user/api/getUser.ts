import { $cms_api } from "@/shared/api/configs/axios";

export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const res = $cms_api.get("/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (e) {
      console.error(e);
    }
  }
};
