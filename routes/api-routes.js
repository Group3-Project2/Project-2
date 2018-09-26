const path = require("path");
const db = require("../models")

module.exports = function (app) {
    app.post("/api/posts", function (req, res) {
        console.log(req.body);
        db.Post.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });
};