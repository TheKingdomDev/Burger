var burgers = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        res.render("index", {burgers: data});
    });
});

router.get("/burgers", function(req, res) {
    burgers.selectAll(function(data) {
        res.render("index", {burgers: data});
    });
});

router.post("/burgers/create", function(req, res) {
    burgers.create(["burger_name"], [req.body.burger_name], function(data) {
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: " + condition);

    burgers.update({"devoured" : req.body.devoured}, condition, function(data) {
        res.redirect("/burgers");
    });
});

module.exports = router;