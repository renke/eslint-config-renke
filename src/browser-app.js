import nodeLibConfig from "./node-lib";

export default {
  ...nodeLibConfig,

  env: {
    ...nodeLibConfig.env,

    browser: true,
  },
};
