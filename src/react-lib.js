import browserConfig from "./browser-lib";
import reactRules from "./rules/react";

export default {
  ...browserConfig,

  plugins: [
    ...browserConfig.plugins,
    "react",
  ],

  rules: {
    ...browserConfig.rules,
    ...reactRules,
  },

  // JSX is enabled by default in babel-eslint
  // parserOptions: {
  //   ...browserConfig.parserOptions,
  //
  //   ecmaFeatures: {
  //     ...browserConfig.parserOptions.ecmaFeatures,
  //     jsx: true,
  //   },
  // },
};
