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
  source: 'Linus Torvalds', 
  cite: ' .', 
  year: ' .', 
  tag: 'linux.'
},
{
  quote:'Life can only be understood backwards; but it must be lived forwards.', 
  source: 'Soren Kierkegaard', 
  cite: ' .', 
  year: ' .', 
  tag: 'life.'
},
{
  quote:'The most disastrous thing that you can ever learn is your first programming language.', 
  source: 'Alan Kay', 
  cite: ' .', 
  year: ' .', 
  tag: 'programming.'
},
{
  quote:'I have missed more than 9000 shots in my career. I have lost almost 300 games. 26 times I have been trusted to take the game winning shot and missed. I have failed over and over and over again in my life. And that is why I succeed.', 
  source: 'Michael Jordan', 
  cite: ' .', 
  year: ' .', 
  tag: 'inspiration.'
},
{
  quote:'What kind of programmer is so divorced from reality that she thinks she will get complex software right the first time?.', 
  source: 'James Alan Gardner', 
  cite: 'Acending.', 
  year: '2001.', 
  tag: 'programming.'
},
{
  quote:'There are no mistakes, only opportunities.', 
  source: 'Tina Fey', 
  cite: ' .', 
  year: ' .', 
  tag: 'comedy.'
},
{
  quote:'Take time to learn the closest thing that we have to a SUPERPOWER - Code.', 
  source: 'Sharen Eddings', 
  cite: ' .', 
  year: ' .', 
  tag: 'programming.'
},
{
  quote:'The minute that you’re not learning I believe you are dead.', 
  source: 'Jack Nicholson', 
  cite: ' .', 
  year: ' .', 
  tag: 'life.'
},
{
  quote:'Programming is not about what you know; it is about what you can figure out.', 
  source: 'Chris Pine', 
  cite: 'Learn to Program.', 
  year: '2006', 
  tag: 'programming.'
},
{
  quote:'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.', 
  source: 'Maya Angelou.', 
  cite: ' .', 
  year: ' .', 
  tag: 'life.'
},
]

/***
 * `getRandomQuote` function
***/
//function that prints quotes randomly from the array 'quotes'
function getRandomQuote () {
  let getRandomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[getRandomQuote];
}
console.log(getRandomQuote());
/***
 * `printQuote` function
***/
function printQuote () {
  let display = getRandomQuote(quotes);
  let message = `
    <p class = "quote"> ${display.quote}</p>
    <p class = "source"> ${display.source}</p>
    <p class = "citation"> ${display.citation}</p>
    <p class = "year"> ${display.year}</p>
    <p class = "tag"> ${display.tag}</p> `
  
  if (display.quote) {
    message += `<span class = "quote"> ${display.quote}</span>`
  }    
  if (display.source) {
    message += `<span class = "source"> ${display.source}</span>`
  }    
  if (display.citation) {
    message += `<span class = "citation"> ${display.citation}</span>`
  }  
  if (display.year) {
    message += `<span class = "year">${display.year}</span>`
  }
  if (display.tag) {
    message += `<span class = "tag">${display.tag}</span>`
  }
  message += `</p>`
  document.getElementById("quote-box").innerHTML = message
}

/***
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
