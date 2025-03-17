module.exports = function (api) {
    api.cache(true);
    return {
      presets: ["babel-preset-expo"],
      plugins: [
        "nativewind/babel", // NativeWind Babel 플러그인 추가
      ],
    };
  };
  