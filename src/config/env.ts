import Constants from "expo-constants";

export default {
  API_BASE_URL: Constants.expoConfig?.extra?.API_BASE_URL || "http://localhost:8080/api",
};