/**
 * @fileoverview Simple ESlint Plugin
 * @author appruut
 */
"use strict";

// sample plugins
module.exports = {
  configs: {
    "tsc-custom": require("./tsc-custom.json"),
    recommended: require("./recommended.json"),
  },
};
