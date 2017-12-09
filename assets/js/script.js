$(document).ready(function() {	


let query = $("#query").text();
let startYear = $("#startYear").text();
let endYear = $("#endYear").text();
let ofRecords = $("#ofRecords").text();

// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 

url += '?' + $.param({
  'api-key': "08b57b9014864defb207d9dfd14a4912",
  'q': "query",
  'fq': "ofRecords",
  'begin_date': "startYear",
  'end_date': "endYear"
});


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

});