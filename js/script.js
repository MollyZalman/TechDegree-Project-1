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
    cite: 'Quotes.com', 
    year: 'Year Unknown', 
  },
  {
    quote:'Life can only be understood backwards; but it must be lived forwards.', 
    source: 'Soren Kierkegaard', 
    cite: 'Quotes.com', 
    year: 'Year Unknown'
  },
  {
    quote:'The most disastrous thing that you can ever learn is your first programming language.', 
    source: 'Alan Kay', 
    cite: 'Quotes.com', 
    year: 'Year Unknown' 
  },
  {
    quote:'I have missed more than 9000 shots in my career. I have lost almost 300 games. 26 times I have been trusted to take the game winning shot and missed. I have failed over and over and over again in my life. And that is why I succeed.', 
    source: 'Michael Jordan', 
    cite: 'Unknown', 
    year: 'Quotes.com'
  },
  {
    quote:'What kind of programmer is so divorced from reality that she thinks she will get complex software right the first time?', 
    source: 'James Alan Gardner', 
    cite: 'Acending', 
    year: '2001' 
  },
  {
    quote:'There are no mistakes, only opportunities.', 
    source: 'Tina Fey', 
    cite: 'Quotes.com', 
    year: 'Year Unknown' 
  },
  {
    quote:'Take time to learn the closest thing that we have to a SUPERPOWER - Code.', 
    source: 'Sharen Eddings', 
    cite: 'Quotes.com', 
    year: 'Year Unknown' 
  },
  {
    quote:'The minute that you’re not learning I believe you are dead.', 
    source: 'Jack Nicholson', 
    cite: 'Quotes.com', 
    year: 'Year Unknown' 
  },
  {
    quote:'Programming is not about what you know; it is about what you can figure out.', 
    source: 'Chris Pine', 
    cite: 'Learn to Program', 
    year: '2006'
  },
  {
    quote:'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.', 
    source: 'Maya Angelou', 
    cite: 'Quotes.com', 
    year: 'Year Unknown',
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
  getRandomColor();
  
  /***
   * `printQuote` function
  ***/
  //printQuote function using interText/HTML to print the quote and change the color
  function printQuote () { 
    const { quote, source, cite, year} = getRandomQuote(quotes);  
      document.querySelector(".quote").innerText = quote;
      document.querySelector(".source").innerHTML = `${source}<span class="citation">${cite}</span><span class="year">${year}</span></pclass=><span`;
      return getRandomColor();
    }


    //Random Color Generator inspired by https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
  function getRandomColor () {
    let x = Math.floor(Math.random() * 300);
    let y = Math.floor(Math.random() * 300);
    let z = Math.floor(Math.random() * 300);
    let getRandomColor = "rgb(" + x + "," + y + "," + z + ")";
    return document.body.style.background = getRandomColor;
  }  
  getRandomColor();
  
  /*
  Show another background color every 10 seconds automatically
  Inspired by https://www.w3schools.com/jsref/met_win_setinterval.asp
  */
  setInterval(getRandomColor, 10000);

  //Show another quote every 10 seconds automatically 
  setInterval(printQuote, 10000);

  /***
   * DO NOT CHANGE THE CODE BELOW!!
  ***/

  document.getElementById('load-quote').addEventListener("click", printQuote, false);
