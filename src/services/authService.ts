import { useMutation } from "@tanstack/react-query";
import { registerUserApi } from "../api/auth";
import { RegisterUserType } from "../types/auth"

// 회원가입 로직
export const useRegister = () => {
    return useMutation<void, Error, RegisterUserType>({
      mutationFn: registerUserApi,
      onSuccess: () => {
        console.log("회원가입 성공!");
      },
      onError: (error) => {
        console.error("회원가입 실패:", error);
      },
    });
  };