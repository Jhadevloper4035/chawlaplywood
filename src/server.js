const app = require("./app");
const config = require("./config/appConfig");

app.listen(config.port, () => {
  console.log(`Chawla Plywood app running at http://localhost:${config.port}`);
});
