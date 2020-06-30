import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://boticariochallenge.herokuapp.com/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
   
  config.headers.Authorization = `Bearer ${token}`;
  
  return config;
});

export default api;