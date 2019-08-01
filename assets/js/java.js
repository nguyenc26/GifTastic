//adding an item event 
//display gifs that have been grabbed 
//animating gifs

//array of things to scan through 
var superheroes = ["Batman", "Superman", "Spider-man", "Green Lantern", "Hulk", "Wonder Woman", "Black Widow", "The Flash", "Wolverine", "Thor", "Deadpool", "Doctor Strange"]

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

//addshow event

//displays gif with api function 

//click event listener for animating gifs


generatebuttons()