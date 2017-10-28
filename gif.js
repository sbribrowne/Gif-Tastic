
      var animals = ["Moose", "Cat", "Dog", "Horse", "Girrafe"];

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
