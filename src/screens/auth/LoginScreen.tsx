"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

// 네비게이션 타입 정의
type RootStackParamList = {
  Login: undefined
  Register: undefined
}
type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenProp>()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    console.log("로그인 시도:", { email, password })
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
        <View className="flex-1 justify-center items-center p-6">
          {/* 로고 또는 앱 이름 */}
          <View className="mb-10 items-center">
            <Text className="text-4xl font-bold text-black mb-2">앱 로고</Text>
          </View>

          {/* 로그인 폼 */}
          <View className="w-full bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <Text className="text-2xl font-bold text-black mb-6">LOGIN</Text>

            <View className="w-full mb-5">
              <Text className="mb-2 text-gray-700 font-medium">E-mail</Text>
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

            <View className="w-full mb-6">
              <Text className="mb-2 text-gray-700 font-medium">password</Text>
              <TextInput
                className="border-b-2 border-gray-200 px-4 py-3 w-full text-black focus:border-black"
                placeholder="비밀번호 입력"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity className="self-end mt-2">
                <Text className="text-gray-500 text-sm">비밀번호를 잊으셨나요?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="bg-black rounded-lg py-3 w-full items-center mb-4" onPress={handleLogin}>
              <Text className="text-white font-bold text-lg">로그인</Text>
            </TouchableOpacity>

            {/* 소셜 로그인 옵션 */}
            <View className="flex-row items-center my-4">
              <View className="flex-1 h-0.5 bg-gray-200" />
              <Text className="mx-4 text-gray-500">또는</Text>
              <View className="flex-1 h-0.5 bg-gray-200" />
            </View>

            <View className="flex-row justify-center space-x-4 mb-6">
              <TouchableOpacity className="bg-white rounded-full p-3 border border-gray-300 w-12 h-12 items-center justify-center">
                <Text className="text-black font-bold">G</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white rounded-full p-3 border border-gray-300 w-12 h-12 items-center justify-center">
                <Text className="text-black font-bold">K</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white rounded-full p-3 border border-gray-300 w-12 h-12 items-center justify-center">
                <Text className="text-black font-bold">A</Text>
              </TouchableOpacity>
              
            </View>
          </View>

          {/* 회원가입 링크 */}
          <View className="mt-8 flex-row items-center">
            <Text className="text-gray-600">계정이 없으신가요?</Text>
            <TouchableOpacity className="ml-2" onPress={() => navigation.navigate("Register")}>
              <Text className="text-black font-bold">회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

