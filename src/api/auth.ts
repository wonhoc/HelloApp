import api from "./instance";
import { RegisterUserType, LoginType } from "../types/auth"

// 회원가입 API 호출
export const registerUserApi = async (data: RegisterUserType): Promise<void> => {
    await api.post("/api/users", data);
  };

export const loginApi = async (data: LoginType): Promise<void> => {
    await api.post("/api/users", data);
}