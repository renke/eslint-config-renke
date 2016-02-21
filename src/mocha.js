import mochaRules from "./rules/mocha";

export default {
  env: {
    mocha: true,
  },

  plugins: [
    "mocha",
  ],

  rules: {
    ...mochaRules,
  },
};
