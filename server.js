var path = require("path");
const express = require("express");
const app = express();
app.use("/public",express.static(path.join(__dirname,"/public")));
//these routes/use functionalities should come last since the 404 error route should always be the last declared route and the routes.js file contains that.
const routes = require("./routes/routes.js"); 
app.use("/",routes);
app.listen(3052);