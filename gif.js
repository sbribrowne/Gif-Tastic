
      var animals = ["Moose", "Cat", "Dog", "Horse", "Elephant"];

//ADDING BUTTONS

      // display data
      function renderButtons() {
        $("#animals-view").empty();

        for (var i = 0; i < animals.length; i++) {

          var a = $("<button>");
          a.addClass("animal");
          a.attr("data-name", animals[i]);
          a.text(animals[i]);
          $("#animals-view").append(a);
        }
      }

 
      $("#addAnimal").on("click", function(event) {
        event.preventDefault(); //stop page from reloading on submit

        var input = $("#userInput").val();
        animals.push(input);

        renderButtons();
      });

      renderButtons(); //display initial movies array


//MAKING GIFS APPEAR ON CLICK WITH AJAX

$("button").on("click", function() {
      $("#gifPlacement").empty();
      var title = $(this).attr("data-name");

      // AJAX Stuff
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        title + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        }) .done(function(response) {
         
          var results = response.data;
          console.log(queryURL);

          for (var i = 0; i < results.length; i++) {
              var gifHolder = $("<div class='section'>");

              var rating = results[i].rating;
              var p = $("<p>").text("Rating: " + rating);

              var showGif = $("<img>");
              showGif.attr("src", results[i].images.fixed_height.url);

              gifHolder.append(showGif);
              gifHolder.append(p);

              $("#gifPlacement").append(gifHolder);
            }
        });
    });

//MAKING GIFS STILL AND ANIMATED ON CLICK