/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//array with a list of ten random quotes
const quotes = [
{
  quote:'Talk is cheap. Show me the code.', 
  source: 'Linus Torvalds ', 
  cite: 'Quotes.com ', 
  year: 'Unknown ', 
  tag: 'linux '
},
{
  quote:'Life can only be understood backwards; but it must be lived forwards.', 
  source: 'Soren Kierkegaard ', 
  cite: 'Quotes.com ', 
  year: 'Unknown ', 
  tag: 'life '
},
{
  quote:'The most disastrous thing that you can ever learn is your first programming language.', 
  source: 'Alan Kay ', 
  cite: 'Quotes.com ', 
  year: 'Unknown ', 
  tag: 'programming'
},
{
  quote:'I have missed more than 9000 shots in my career. I have lost almost 300 games. 26 times I have been trusted to take the game winning shot and missed. I have failed over and over and over again in my life. And that is why I succeed.', 
  source: 'Michael Jordan ', 
  cite: 'Unknown ', 
  year: 'Quotes.com ', 
  tag: 'inspiration '
},
{
  quote:'What kind of programmer is so divorced from reality that she thinks she will get complex software right the first time?', 
  source: 'James Alan Gardner ', 
  cite: 'Acending ', 
  year: '2001 ', 
  tag: 'programming '
},
{
  quote:'There are no mistakes, only opportunities.', 
  source: 'Tina Fey ', 
  cite: 'Quotes.com ', 
  year: 'Unknown ', 
  tag: 'comedy '
},
{
  quote:'Take time to learn the closest thing that we have to a SUPERPOWER - Code.', 
  source: 'Sharen Eddings ', 
  cite: 'Quotes.com ', 
  year: 'Unknown ', 
  tag: 'programming '
},
{
  quote:'The minute that you’re not learning I believe you are dead.', 
  source: 'Jack Nicholson ', 
  cite: 'Quotes.com ', 
  year: 'Unknown ', 
  tag: 'life '
},
{
  quote:'Programming is not about what you know; it is about what you can figure out.', 
  source: 'Chris Pine ', 
  cite: 'Learn to Program ', 
  year: '2006 ', 
  tag: 'programming '
},
{
  quote:'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.', 
  source: 'Maya Angelou ', 
  cite: 'Quotes.com ', 
  year: 'Unknown ', 
  tag: 'life '
},
]

/***
 * `getRandomQuote` function
***/
//function that prints quotes randomly from the array 'quotes'
function getRandomQuote (display) {
  let getRandomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[getRandomQuote];
}

/***
 * `printQuote` function
***/
//printQuote function using intertext and querySelector
function printQuote () { 
const { quote, source, cite, year, tag} = getRandomQuote(quotes);  
let htmlString = '';

document.querySelector(".quote").innerText = quote;
document.querySelector(".source").innerText = source;
document.querySelector(".cite").innerText = cite;
document.querySelector(".year").innerText = year;
document.querySelector(".tag").innerText = tag;

//Filling in cite, year, tag
htmlString += '<p class="quote">' + printQuote.quote + '</p>';
htmlString += '<p class="source">' + printQuote.source;

if (printQuote.cite) {
 htmlString += '<span class = "cite">' + printQuote.cite + '</span>'
}
if (printQuote.year) {
  htmlString += '<span class = "year">' + printQuote.year + '</span>'
 }
 if (printQuote.tag) {
  htmlString += '<p><span class = "tag">' + printQuote.tag + '</span></p>'
 }
}
/***
 * DO NOT CHANGE THE CODE BELOW!!
***/

//Show another quote
document.getElementById('load-quote').addEventListener("click", printQuote, false);
