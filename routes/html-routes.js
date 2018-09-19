const path = require("path");

module.exports = function(app, db) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/about", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    app.get("/blog", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    app.get("/contact", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    app.get("/accounts/:username", async (req, res) => {
        let userData;
        try {
            userData = await db.UserAccount.findOne({
                where: {
                    username: req.params.username
                }
            });
        }
        catch (err) {
            throw new Error(err);
        };
        // Do something with userData here, like present the account landing page with the dynamic user data
    });

};
