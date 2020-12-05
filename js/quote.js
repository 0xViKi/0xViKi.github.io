
var quotes = [
  { quote: 'Go so far away that you stop being afraid of not coming back', source: 'Eve Ensler'},
  { quote: "Live Long and Prosper", source: "Mr. Spock"},
  { quote: 'We are what we pretend to be, so we must be careful about what we pretend to be', source: 'Kurt Vonnegut'},
  { quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall', source: 'Nelson Mandela'},
  { quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn', source: 'Benjamin Franklin'},
  { quote: 'Knowing you’re different is only the beginning. If you accept these differences you’ll be able to get past them and grow even closer', source: 'Miss Kobayashi'},
  { quote: 'Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!', source: 'Shintaro Midorima'},
  { quote: 'Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder', source: 'Gildart Clive'},
  { quote: 'Whatever you lose, you’ll find it again. But what you throw away you’ll never get back', source: 'Kenshin Himura'},
  { quote: 'Fools who don’t respect the past are likely to repeat it', source: 'Nico Robin'},
  { quote: 'Even if you’re weak, there are miracles you can seize with your hands if you fight on to the very end', source: 'Uryuu Minene'},
  { quote: 'If your hate could be turned into electricity, it would light up the whole world', source: 'Nikola Tesla'},
  { quote: 'An expert is a person who has made all the mistakes that can be made in a very narrow field', source: 'Niels Bohr'},
  { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", source: 'Albert Einstein'},
  { quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that", source: 'Martin Luther King Jr.'},
  { quote: "If life were predictable it would cease to be life, and be without flavor", source: 'Eleanor Roosevelt'},
  { quote: "Life is esoteric, One who fathoms are the ones who are victorious", source: 'VijayKrishna'},
]
console.log(quotes);

function getRandomQuote() {
  // this gets a random number ranging from 0 to (quotes.length - 1)
  var random = Math.floor(Math.random() * quotes.length);
  // the random number is used as the index for quotes to pick the right, random one and it is returned to the
  // print function.
  return(quotes[random ]);
}


function printQuote(){
  //Pull the quote in question from getRandomQuote
  var currentQuote = getRandomQuote();
  // Set a blank string to hold the HTML
  var html = ''
  //Set up a variable to point to our quote box in the HTML
  var quoteDiv = document.getElementById('quote-box')

  //Open up a p tag and place the quote itself in it
  html += '<p class="quote">' + currentQuote.quote

  //If tags are present...
  if ('tags' in currentQuote){
    // ...Add the tags to the quote
      html += '  ' + currentQuote.tags.join(', ')
  }
  // Close the first p tag
  html += '</p>'

  // mandatory p tag for source
  html += '<p class="source">' + currentQuote.source
  // if a citation is defined...
  if ('citation' in currentQuote) {
    // ...add it to the p tag
    html += '<span class="citation">' + currentQuote.citation + '</span>'
  }
  // If a year is defined...
  if ('year' in currentQuote){
    // ...add it to the p tag
    html += '<span class="year">' + currentQuote.year + '</span>'
  }
  html += '</p>'

  // take this HTML item we have been appending and set the html of the quote box to it
  quoteDiv.innerHTML = html

  // run the set randomBackground() program to change the background color
  setRandomBackground()

}

function setRandomBackground(){
  // This function changes the background color to one of 6 pre-defined colors based on a random
  // number generator.  First get the random number
  var randomNumber = Math.floor(Math.random() * 7)

  // then check to see what the number equals and assign the corresponding color
  if (randomNumber == 0){
    document.body.style.background = 'dimgray'; //V I B G Y O R
  }else if (randomNumber == 1){
    document.body.style.background = 'blue';
  }else if (randomNumber == 2){
    document.body.style.background = 'green';
  }else if (randomNumber == 3){
    document.body.style.background = 'red';
  }else if (randomNumber == 4){
    document.body.style.background = 'purple';
  }else if (randomNumber == 5){
    document.body.style.background = 'darkgoldenrod';
  }else if (randomNumber == 6){
    document.body.style.background = 'darkorange';
  }
}

// Run the function when the button is pressed...
// document.getElementById('load-quote').addEventListener("click", printQuote, false);
// ...or when 30 seconds pass
window.onload = printQuote();
window.setInterval(printQuote, 10000);
