/**
 * @fileoverview Simple ESlint Plugin
 * @author appruut
 */
"use strict";

// sample plugins
module.exports = {
  configs: {
    tspackages: require("./tspackage.json"),
    tsapplications: require("./tsapp.json"),
  },
};
