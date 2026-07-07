const path = require("path");
require("dotenv").config();

const rootDir = path.join(__dirname, "..", "..");

module.exports = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  siteName: "Chawla Plywood",
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  paths: {
    public: path.join(rootDir, "public"),
    views: path.join(__dirname, "..", "views"),
  },
};
