export default ({ config }) => {
    let API_BASE_URL = "http://localhost:8080/api"; // 기본값 (local 환경)
  
    if (process.env.EXPO_ENV === "dev") {
      API_BASE_URL = "https://api.dev.example.com";
    } else if (process.env.EXPO_ENV === "prod") {
      API_BASE_URL = "https://api.prod.example.com";
    }
  
    return {
      ...config,
      name: "HelloApp",
      slug: "HelloApp",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      newArchEnabled: true,
      splash: {
        image: "./assets/splash-icon.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      ios: {
        supportsTablet: true
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff"
        }
      },
      web: {
        favicon: "./assets/favicon.png"
      },
      extra: {
        API_BASE_URL
      }
    };
  };
  