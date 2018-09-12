
const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
