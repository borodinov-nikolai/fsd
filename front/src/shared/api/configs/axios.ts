import axios from "axios";

export const $cms_api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_API_URL,
});
