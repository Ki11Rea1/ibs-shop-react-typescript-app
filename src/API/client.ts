import axios from "axios";
import { API_URL } from "./constants";

export const mockoon = axios.create({
  baseURL: API_URL,
});

mockoon.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(alert(error))
);
