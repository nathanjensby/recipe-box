const withSass = require("@zeit/next-sass");
const path = require("path");

const resourcesLoader = {
  loader: "sass-resources-loader",
  options: {
    resources: require(path.join(process.cwd(), "sass/main.js")),
  },
};
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]___[hash:base64:5]",
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.scss/,
      use: [resourcesLoader],
    });

    return config;
  },
});
