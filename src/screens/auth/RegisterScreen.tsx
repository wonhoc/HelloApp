"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useRegister } from "../../services/authService"
import { RegisterUserType } from "../../types/auth"

const RegisterScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [username, setUsername] = useState("")

  const registerMutation = useRegister();

  const handleRegister = () => {
    if (password !== passwordConfirm) {
      setPasswordError("비밀번호가 일치하지 않습니다.")
      return
    }

    const account: RegisterUserType = { email, password, username };
    setPasswordError("")
    
    registerMutation.mutate(account);
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
        <View className="flex-1 justify-center items-center p-6">
          {/* 로고 또는 앱 이름 */}
          <View className="mb-10 items-center">
            <Text className="text-4xl font-bold text-black mb-2">앱 로고</Text>
            <Text className="text-gray-500 text-lg">새로운 계정 만들기</Text>
          </View>

          {/* 회원가입 폼 */}
          <View className="w-full bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <Text className="text-2xl font-bold text-black mb-6">회원가입</Text>

            <View className="w-full mb-5">
              <Text className="mb-2 text-gray-700 font-medium">이메일</Text>
              <TextInput
                className="border-b-2 border-gray-200 px-4 py-3 w-full text-black focus:border-black"
                placeholder="이메일 입력"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View className="w-full mb-5">
              <Text className="mb-2 text-gray-700 font-medium">비밀번호</Text>
              <TextInput
                className="border-b-2 border-gray-200 px-4 py-3 w-full text-black focus:border-black"
                placeholder="비밀번호 입력"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <Text className="text-xs text-gray-500 mt-1">8자 이상, 특수문자 포함</Text>
            </View>

            <View className="w-full mb-6">
              <Text className="mb-2 text-gray-700 font-medium">비밀번호 확인</Text>
              <TextInput
                className="border-b-2 border-gray-200 px-4 py-3 w-full text-black focus:border-black"
                placeholder="비밀번호 확인"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
              />
              {passwordError ? <Text className="text-red-500 text-sm mt-1">{passwordError}</Text> : null}
            </View>
            
            
            <View className="w-full mb-5">
              <Text className="mb-2 text-gray-700 font-medium">이름</Text>
              <TextInput
                className="border-b-2 border-gray-200 px-4 py-3 w-full text-black focus:border-black"
                placeholder="이름 입력"
                placeholderTextColor="#9CA3AF"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>


            <TouchableOpacity
              className="bg-black rounded-lg py-3 w-full items-center mb-4 mt-4"
              onPress={handleRegister}
            >
              <Text className="text-white font-bold text-lg">회원가입</Text>
            </TouchableOpacity>

            {/* 약관 동의 */}
            <View className="mt-4">
              <Text className="text-gray-500 text-sm text-center">
                회원가입을 완료하면 당사의 <Text className="text-black font-medium">이용약관</Text>과{" "}
                <Text className="text-black font-medium">개인정보처리방침</Text>에 동의하게 됩니다.
              </Text>
            </View>
          </View>

          {/* 로그인 링크 */}
          <View className="mt-8 flex-row items-center">
            <Text className="text-gray-600">이미 계정이 있으신가요?</Text>
            <TouchableOpacity className="ml-2" onPress={() => navigation.goBack()}>
              <Text className="text-black font-bold">로그인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;