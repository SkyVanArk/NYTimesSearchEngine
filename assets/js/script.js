$(document).ready(function() {	



let query = $("#query").val();
let startYear = $("#startYear").val();
let endYear = $("#endYear").val();
let ofRecords = $("#ofRecords").val();

$("#searchButton").on("click", function() {

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 

url += '?' + $.param({
  'api-key': "08b57b9014864defb207d9dfd14a4912",
  'q': query,
  'fq': ofRecords,
  'begin_date': startYear + "0101",
  'end_date': endYear + "1230"
});

$.ajax({
  url: url,
  method: 'GET',
})

.done(function(response) {
          $("#results").empty();
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            // var articleDiv = $("<div class='item'>");
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
        })
    });	
});
