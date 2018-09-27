const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    app.get("/blog", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });
    app.post("/api/posts", function (req, res) {
        db.Post.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // app.post('/data', function (req, res) {

    //     var username = req.body.name;

    //     connection.query("INSERT INTO `names` (name) SET ?", username.toString(), function (err, result) {
    //         if (err) throw err;

    //         console.log("1 record inserted");
    //     });

    //     res.send(username);

    // });

    // app.post('/#', function (req, res) {

    //     const name = req.body.contactName;
    //     const email = req.body.contactEmail;
    //     const number = req.body.contactNumber;
    //     const message = req.body.message
    //     res.write('You sent the name "' + name + '".\n');
    //     res.write('You sent the email "' + email + '".\n');
    //     res.write('You sent the number "' + number + '".\n');
    //     res.write('You sent the message "' + message + '".\n');

    //     // db.Post.create(req.body).then(function (dbPost) {
    //     //     res.json(dbPost);
    //     // });

    // });
};