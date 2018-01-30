// Initial Array

function quote11(){
  var quotes =[
    "This is quote 0 -a dead dude", 
    "This is quote 1 -a dead dude",
    "This is quote 2 -a dead dude",
    "This is quote 3 -a dead dude",
    "This is quote 4 -a dead dude",
    "This is quote 5 -a dead dude",
    "This is quote 6 -a dead dude",
    "This is quote 7 -a dead dude",
    "This is quote 8 -a dead dude",
    "This is quote 9 -a dead dude",
    
  ];
  //  ransom math to get quote
  var random=(Math.floor(Math.random() * ((quotes.length))) + 0);
  var quote1 = quotes[(random)];
  //breake quote into chunks
  var quote1pt1 = quote1.substring(0, quote1.indexOf('-'));
  var quote1pt2 = quote1.substring(quote1.indexOf('-'),quote1.length);
  //Assigning chunks to correct spot on page
  document.getElementById("quote-box").innerHTML=("<p id='quoted'>"+ quote1pt1 + "</p> <p id='auth'>" + quote1pt2 + "</p>")
  //replacing spaces for twitter link
  var quote1LinkText = quote1.replace(/\s/g, "%20");
  //put quote in first tweet button
document.getElementById("twitter-btn").href = ("https://twitter.com/intent/tweet?text="+ quote1);
 

}               
                    
$( document ).ready(quote11());

// Ajax call
function fetchQuote() {
  $.ajax({
    method: 'GET',
    url: 'https://api.forismatic.com/api/1.0/',
    dataType: 'jsonp',
    format: 'jsonp',
    jsonp: 'jsonp',
    jsonpCallback: 'displayQuote', 
    data: {
      method: 'getQuote',
      format: 'jsonp',
      lang: 'en'
    },
    success: function(data) {
    
    //break up to chunks
  var quote = data.quoteText;
  var author = data.quoteAuthor;
  // Display quote text in quote box
  $('#quote').html(quote);
  $('#author').html(author);
      //assign to twitter button
  document.getElementById("twitter-btn2").href = ("https://twitter.com/intent/tweet?text="+ quote +' - '+author);
  }
  });
};
     


$(document).ready(function(){
  fetchQuote();
});