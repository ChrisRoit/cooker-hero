var path = require("path");
var express = require("express");
var router = express.Router();
var axios = require("axios");
router.use("/public", express.static(path.join(__dirname, "public")));
router.get("/", function (req, res) {
    res.render("index.ejs", { root: __dirname, testdata: "hello i am a test" });
});
router.get("/recipes/search", function (req, res) {
    res.render("search_recipes.ejs", { root: __dirname });
});
router.get("/recipes/:query/:cuisineType", function (req, res) {
    var app_key = "3586e260dd451cec39b7ebd2b65065f9";
    var app_id = "50bbf94c";
    var requestApiString = "https://api.edamam.com/api/recipes/v2?type=public&q=".concat(req.params.query, "&app_id=").concat(app_id, "&app_key=").concat(app_key, "&cuisineType=").concat(req.params.cuisineType);
    //https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=df29b191&app_key=8ad4cffe6b2ee2673aec93ea6878c934s
    axios.get(requestApiString).then(function (response) {
        var cuisineType = req.params.cuisineType.charAt(0).toUpperCase() + req.params.cuisineType.slice(1, req.params.cuisineType.length);
        res.render("recipes.ejs", { root: __dirname, recipes: response.data, mainIngredient: req.params.query, cuisineType: cuisineType });
    })["catch"](function (error) {
        res.render("recipes.ejs", { root: __dirname, recipes: { "error": error } });
    });
});
router.use("*", function (req, res) {
    res.render("404.ejs", { root: __dirname });
});
module.exports = router;
