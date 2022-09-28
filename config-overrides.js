const fs = require("fs");
const os = require("os");
const path = require("path");
const webpack = require("webpack");
const { override, addBabelPlugin } = require("customize-cra");

/**
 * read configuration based on environment,
 * write .env file and configuration file.
 */
const generateConfiguration = async () => {
  try {
    const variables = [
      `NODE_VERSION="16.5.0"`,
      "GENERATE_SOURCEMAP=false",
      "REACT_APP_API_URL=https://main-api-dev.herokuapp.com",
    ];
    fs.writeFileSync("./.env", variables.join(os.EOL));

    // const env = process.env.REACT_APP_ENV || "development";
    // const configuration = require(`./config/config.${env}.json`);

    // console.log(configuration);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

generateConfiguration();

module.exports = override((config) => {
  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  });
  return config;
});
