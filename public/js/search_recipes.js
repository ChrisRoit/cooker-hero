//formats the path so that the url can be used in a redirect
function searchPathGenerator(ingredient, country) {
    var baseUrl = location.href.replace("search", "");
    return baseUrl + "".concat(ingredient, "/").concat(country);
}

//grabs the ingredient and country input field values. then redirects using the link provided by the searchPathGenerator
function redirect() {
    var ingredient = document.getElementById("ingredient").value;
    var country = document.getElementById("cuisineType").value;
    if (country == null || country == "undefined" || ingredient == null || ingredient == "undefined") {
        return false;
    }
    var formattedUrl = searchPathGenerator(ingredient, country);
    location.href = formattedUrl;
}
//grab the search button
var searchButton = document.getElementById("searchButton");
//set a click event listener on the search button to trigger the redirect function
searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener("click", function (e) { return redirect(); });
