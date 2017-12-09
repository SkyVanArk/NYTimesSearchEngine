.done(function(response) {
          $("#results").empty();
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var articleDiv = $("<div class='item'>");

            var title = results[i].docs.headline.main;
            var snippet = results[i].docs.snippet;


            var returnedValue = function() {
              $('#results').append(`<h1>${title}</h1><p>${snippet}</p>`);
            };
            // var personImage = $("<img>");
            // personImage.attr("src", results[i].images.fixed_height.url);

            // articleDiv.prepend(snippet);
            // articleDiv.prepend(personImage);

            $("#results").prepend(gifDiv);
          }
        }