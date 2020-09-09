                                                              /*#########################################
                                                                    Treehouse FSJS Techdegree:
                                                                Project 1 - A Random Quote Generator
                                                              ##########################################*/

//array with a list of ten random quotes
const quotes = [
  {
    quote:'Talk is cheap. Show me the code.', 
    source: 'Linus Torvalds', 
    citation: 'Quotes.com', 
    year: 'Year Unknown', 
    tag: 'Linux'
  },
  {
    quote:'Life can only be understood backwards; but it must be lived forwards.', 
    source: 'Soren Kierkegaard', 
    citation: 'Quotes.com', 
    year: 'Year Unknown',
    tag: 'Life'
  },
  {
    quote:'The most disastrous thing that you can ever learn is your first programming language.', 
    source: 'Alan Kay', 
    citation: 'Quotes.com', 
    year: 'Year Unknown', 
    tag: 'Programming'
  },
  {
    quote:'I have missed more than 9000 shots in my career. I have lost almost 300 games. 26 times I have been trusted to take the game winning shot and missed. I have failed over and over and over again in my life. And that is why I succeed.', 
    source: 'Michael Jordan', 
    citation: 'Unknown', 
    year: 'Quotes.com',
    tag: 'Sports'
  },
  {
    quote:'What kind of programmer is so divorced from reality that she thinks she will get complex software right the first time?', 
    source: 'James Alan Gardner', 
    citation: 'Acending', 
    year: '2001',
    tag: 'Programming' 
  },
  {
    quote:'There are no mistakes, only opportunities.', 
    source: 'Tina Fey', 
    citation: 'Quotes.com', 
    year: 'Year Unknown',
    tag: 'Motivation' 
  },
  {
    quote:'Take time to learn the closest thing that we have to a SUPERPOWER - Code.', 
    source: 'Sharen Eddings', 
    citation: 'Quotes.com', 
    year: 'Year Unknown',
    tag: 'Programming' 
  },
  {
    quote:'The minute that you’re not learning I believe you are dead.', 
    source: 'Jack Nicholson', 
    citation: 'Quotes.com', 
    year: 'Year Unknown',
    tag: 'Comedy' 
  },
  {
    quote:'Programming is not about what you know; it is about what you can figure out.', 
    source: 'Chris Pine', 
    citation: 'Learn to Program', 
    year: '2006',
    tag: 'Programming'
  },
  {
    quote:'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.', 
    source: 'Maya Angelou', 
    citation: 'Quotes.com', 
    year: 'Year Unknown',
    tag: 'Life'
  }
  ]
  
  //function that prints quotes randomly from the array 'quotes'
  function getRandomQuote () {
    let getRandomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[getRandomQuote];
  }
  getRandomColor();
  
  //printQuote function using interText/HTML to print the quote and change the color
  function printQuote () { 
    const { quote, source, citation, year, tag} = getRandomQuote(quotes);  
      document.querySelector(".quote").innerText = quote;
      document.querySelector(".source").innerHTML = `${source}<span class="citation">${citation}</span><span class="year">${year}</span><span class="tag">${tag}</span></pclass=>`;
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
  
  /*
  Show another background color every 10 seconds automatically
  Inspired by https://www.w3schools.com/jsref/met_win_setinterval.asp
  */
  setInterval(getRandomColor, 10000);

  //Show another quote every 10 seconds automatically 
  setInterval(printQuote, 10000);

  document.getElementById('load-quote').addEventListener("click", printQuote, false);
