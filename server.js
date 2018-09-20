const bodyParser = require('body-parser');
const express = require("express");
const db = require("./models");
const session = require('express-session');
const app = express();
const authOCreds = JSON.parse(fs.readFileSync(path.join(__dirname, "/config/.auth0")));
const Auth0Strategy = require('passport-auth0'),
    passport = require('passport');

//passport-auth0
const strategy = new Auth0Strategy({
  domain: 'grp3-project3.auth0.com',
  clientID: 'iwFvk3eIQyVHS27UypGUC8muSlrA61rk',
  clientSecret: auth0Creds['secret'], // Replace this with the client secret for your app
  callbackURL: 'http://localhost:3000/callback'
 },
 function(accessToken, refreshToken, extraParams, profile, done) {
   // accessToken is the token to call Auth0 API (not needed in the most cases)
   // extraParams.id_token has the JSON Web Token
   // profile has all the information from the user
   return done(null, profile);
 }
);

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

const fs = require('fs');
const path = require('path');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));


require("./routes/html-routes.js")(app, db);
require("./routes/api-routes.js")(app, db);


if (app.get('env') === 'production') {
 sess.cookie.secure = true; // serve secure cookies, requires https
}

app.use(session(authOCreds));

const PORT = process.env.PORT || 8080;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
