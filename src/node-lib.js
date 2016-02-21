import eslintRules from "./rules/eslint";
import importRules from "./rules/import";

export default {
  // Use babel as parser
  parser: "babel-eslint",

  plugins: [
    "babel",
    "import",
  ],

  rules: {
    ...eslintRules,
    ...importRules,
  },

  env: {
    // "amd",
    // "applescript",
    // "atomtest",
    // "browser",
    // "builtin",
    commonjs: true,
    // "couch",
    // "embertest",
    // "es5",
    es6: true,
    // "greasemonkey",
    // "jasmine",
    // "jest",
    // "jquery",
    // "meteor",
    // "mocha",
    // "mongo",
    // "nashorn",
    node: true,
    // "phantomjs",
    // "prototypejs",
    // "protractor",
    // "qunit",
    // "rhino",
    // "serviceworker",
    // "shared-node-browser",
    // "shelljs",
    // "webextensions",
    // "worker",
    // "wsh",
    // "yui"
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",

    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
