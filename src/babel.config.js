const { runtime } = require("../jest.config");

// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" }, modules: false }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
