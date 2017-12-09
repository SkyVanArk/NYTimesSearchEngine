$(document).ready(function() {	

$("#searchButton").on("click", function() {

let query = $("#query").val();
let startYear = $("#startYear").val();
let endYear = $("#endYear").val();
let ofRecords = $("#ofRecords").val();	


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 

url += '?' + $.param({
  'api-key': "08b57b9014864defb207d9dfd14a4912",
  'q': query,
  'fq': ofRecords,
  'begin_date': startYear + "0101",
  'end_date': endYear + "1230"
});
console.log(url);
$.ajax({
  url: url,
  method: 'GET',
})

.done(function(response) {
          $("#results").empty();
          var results = response.response.docs;
          // console.log(results);



          for (var i = 0; i < results.length; i++) {
            console.log('im working');  
            var title = results[i].headline.main;
            var snippet = results[i].snippet;
            console.log(title);
            console.log(snippet);
            

            $('#results').append(`<h1>${title}</h1><p>${snippet}</p>`);

          };
        });
    });	
});
