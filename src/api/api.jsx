import Axios from "axios";
import { getToken } from "./auth";

const API = Axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1",
});

API.interceptors.request.use(async (config) => {
  const TOKEN = getToken();
  if (TOKEN) {
    config.headers.Authorization = `Bearer ${TOKEN}`;
  }
  return config;
});

export default API;
