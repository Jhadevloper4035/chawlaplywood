const express = require("express");
const bodyParser = require("body-parser");

const config = require("./config/appConfig");
const { buildSeo } = require("./config/seo");
const footerData = require("./config/footerData");
const adminRoutes = require("./routes/admin");
const webRoutes = require("./routes/web");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.set("view engine", "ejs");
app.set("views", config.paths.views);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(config.paths.public));

app.use((req, res, next) => {
  res.locals.seo = buildSeo({ path: req.originalUrl });
  res.locals.footerData = footerData;
  next();
});

app.use("/admin", adminRoutes);
app.use("/", webRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
