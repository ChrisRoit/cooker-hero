const path = require("path");
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.use("/public",express.static(path.join(__dirname,"public")));

router.get("/",(req,res) => {
    res.render("index.ejs",{root:__dirname,testdata:"hello i am a test"});
});

router.get("/recipes/search",(req,res) => {
    res.render("search_recipes.ejs",{root: __dirname});
});

router.get("/recipes/:query/:cuisineType",(req,res) => {
    let app_key:string = "3586e260dd451cec39b7ebd2b65065f9";
    let app_id:string = "50bbf94c";
    let requestApiString:string = `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.query}&app_id=${app_id}&app_key=${app_key}&cuisineType=${req.params.cuisineType}`;
    //https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=df29b191&app_key=8ad4cffe6b2ee2673aec93ea6878c934s
    axios.get(requestApiString).then( response => {
        let cuisineType:string = req.params.cuisineType.charAt(0).toUpperCase() + req.params.cuisineType.slice(1,req.params.cuisineType.length);
        res.render("recipes.ejs",{root: __dirname, recipes: response.data,mainIngredient:req.params.query,cuisineType:cuisineType});
    }).catch(error => {
        res.render("recipes.ejs",{root: __dirname, recipes: {"error": error}})
    })
});

router.use("*",(req,res) => {
    res.render("404.ejs",{root:__dirname});
});


module.exports = router;