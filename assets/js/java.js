//adding an item event 
//display gifs that have been grabbed 
//animating gifs

//array of things to scan through 
var superheroes = ["Batman", "Superman", "Spider-man", "Green Lantern", "Hulk", "Wonder Woman", "Black Widow", "The Flash", "Wolverine", "Thor", "Dead pool", "Doctor Strange"]

//scan through and creates a button for each item in the array
function generatebuttons() {
    $("#buttons").empty();
    for (var i = 0; i < superheroes.length; i++) {
        var buttonmake = $("<button>")
        buttonmake.addClass("heroName");
        buttonmake.attr("data-name", superheroes[i]);
        buttonmake.text(superheroes[i]);
        $("#buttons").append(buttonmake);
    }
}

function displayGifs() {
    var superheroName = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superheroName + "&limit=9&api_key=cN7u7lpi3S5MZebnA1Mgl9XgW1ConvL5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

}
//addshow event

//displays gif with api function 

//click event listener for animating gifs
$(document).on("click", ".heroName", displayGifs);

generatebuttons()