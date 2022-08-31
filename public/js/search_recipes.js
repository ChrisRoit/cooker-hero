function searchPathGenerator(ingredient, country) {
    var baseUrl = location.href.replace("search", "");
    return baseUrl + "".concat(ingredient, "/").concat(country);
}
function redirect() {
    var ingredient = document.getElementById("ingredient").value;
    var country = document.getElementById("cuisineType").value;
    if (country == null || country == "undefined" || ingredient == null || ingredient == "undefined") {
        return false;
    }
    else {
        if (ingredient.length == 0 || country.length == 0) {
            return false;
        }
        var formattedUrl = searchPathGenerator(ingredient, country);
        location.href = formattedUrl;
    }
}
var searchButton = document.getElementById("searchButton");
searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener("click", function (e) { return redirect(); });
