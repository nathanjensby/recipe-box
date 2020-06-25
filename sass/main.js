const path = require("path");

const resources = ["mixins.scss", "variables.scss"];

module.exports = resources.map((file) => path.resolve(__dirname, file));
