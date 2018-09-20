module.exports = function(app, db) {
    // where app/db are called in server.js -- app == express, and db == everything index.js builds for us in models.
    app.post("/api/createAccount", (req, res) => {
        db.UserAccount.create({
            email: req.body.email,
            username: req.body.username,
            schedules: JSON.stringify({}),
            passhash: null // This is where some kind of encrypted password or maybe even link to google password something or other would need to go.
        })
    })
    app.get("/api/loginModal", (req, res) => {
        let htmlText = require('fs').readFileSync(require('path').join(__dirname, '../public/loginModal.html'));
        res.send(htmlText);
    })

    app.get("env") (req, res) => {
        res.send(process.env.NODE_ENV);
    }
};
