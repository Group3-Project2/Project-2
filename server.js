const bodyParser = require('body-parser');
const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));


require("./routes/api-routes.js")(app, db);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
