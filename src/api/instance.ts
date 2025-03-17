import axios from "axios";
import ENV from "../config/env"; // ✅ 환경 변수 가져오기

const api = axios.create({
  baseURL: ENV.API_BASE_URL, // ✅ 환경 변수 적용
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
