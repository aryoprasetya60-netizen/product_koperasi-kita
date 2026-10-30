import axios from "axios";
import { BASE_URL } from "../utils/contants/contants-api";

const api = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 10000,
});

export default api;
