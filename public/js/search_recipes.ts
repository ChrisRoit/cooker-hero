//function that formats the string to a workable url so it can be used inside of the redirect function to create the correct url format to search for the recipes.
function searchPathGenerator(ingredient:string, country:string){
    let baseUrl:string = location.href.replace("search","");
    return baseUrl + `${ingredient}/${country}`;
}

//formats the string based on the selected input values and then if all is set correctly it will redirect to the recipes overview page.
function redirect(){
    let ingredient:string = (document.getElementById("ingredient") as HTMLInputElement).value;
    let country:string = (document.getElementById("cuisineType") as HTMLInputElement).value;
    if(country == null || country == "undefined" || ingredient == null || ingredient == "undefined"){
        return false;
    }else{
        if(ingredient.length == 0 || country.length == 0){
            return false;
        }
        let formattedUrl:string = searchPathGenerator(ingredient,country);
        location.href = formattedUrl;
    }
    
}

const searchButton = document.getElementById("searchButton");
const ingredientInput = document.getElementById("ingredient");
//add a click event to launch the search on the search button
searchButton?.addEventListener("click",(e:Event) => redirect());
//add an event listener on the ingredient input so that the search can also be launched through pressing the enter key when this input field is highlighted.
ingredientInput?.addEventListener("keypress",(e:KeyboardEvent) => {
    if(e.key === "Enter"){
        redirect();
    }
})