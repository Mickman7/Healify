const { getDefaultConfig } = require("expo/metro-config");

//Needed to handle SVGs as react components
//Mainly used for the icons
module.exports = (() => {
  const metroConfiguration = getDefaultConfig(__dirname);
  metroConfiguration.transformer.babelTransformerPath = require.resolve(
    "react-native-svg-transformer"
  );
  metroConfiguration.resolver.assetExts =
    metroConfiguration.resolver.assetExts.filter(
      (fileExtensions) => fileExtensions !== "svg"
    );
  metroConfiguration.resolver.sourceExts.push("svg");

  return metroConfiguration;
})();
