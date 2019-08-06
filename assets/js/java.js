
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
//display gifs that have been grabbed 
function displayGifs() {
    var superheroName = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superheroName + "&limit=9&api_key=cN7u7lpi3S5MZebnA1Mgl9XgW1ConvL5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;

        for ( var i = 0; i < results.length; i++){
            var gifDiv = $("<div class=gifs>")
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var heroImage = $("<img>");
            heroImage.attr("src", results[i].images.fixed_height.url);
            heroImage.attr('data-still', results[i].images.fixed_height_still.url);
			heroImage.attr('data-state', 'still');
			heroImage.attr('data-animate', results[i].images.fixed_height.url);
            
            gifDiv.append(p);
            gifDiv.append(heroImage);
            $("#gifarea").prepend(gifDiv);
            
            
        }
    });

}
//adding an item event 
$("#addhero").on("click", function(){
    event.preventDefault();
	var newHero = $("#superheroes-input").val().trim();
	superheroes.push(newHero);
	generatebuttons();
})

//displays gif with api function

//click event listener for animating gifs
$(".gifs").on("click", function () {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});



$(document).on("click", ".heroName", displayGifs);

generatebuttons()