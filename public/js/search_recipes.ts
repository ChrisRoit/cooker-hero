function searchPathGenerator(ingredient:string, country:string){
    let baseUrl:string = location.href.replace("search","");
    return baseUrl + `${ingredient}/${country}`;
}

function redirect(){
    let ingredient:string = (document.getElementById("ingredient") as HTMLInputElement).value;
    let country:string = (document.getElementById("cuisineType") as HTMLInputElement).value;
    if(country == null || country == "undefined" || ingredient == null || ingredient == "undefined"){
        return false;
    }
    let formattedUrl:string = searchPathGenerator(ingredient,country);
    location.href = formattedUrl;
}

const searchButton = document.getElementById("searchButton");
searchButton?.addEventListener("click",(e:Event) => redirect());