const projects = [
  {
    name: 'This site!',
    date: 'July 2019-Present',
    sourceUrl: 'http://github.com/gruiz17/gruiz17.github.io',
    description: 'Created a static personal page using Svelte and SvelteKit.'
  },
  {
    name: 'Poetry GraphQL API',
    date: 'July 2019',
    sourceUrl: 'http://github.com/gruiz17/poetry-graphql-api',
    description: 'Used Ruby on Rails and GraphQL to create an API for poetry.'
  },
  {
    name: 'Instant Shakespeare',
    date: 'April 2019',
    sourceUrl: 'http://github.com/gruiz17/instant-shakespeare',
    description: 'Created a cross-platform mobile app using Flutter/Dart and RxDart to fetch Shakespeare Sonnets.'
  },
  {
    name: 'nquick',
    date: 'April 2015',
    sourceUrl: 'http://github.com/gruiz17/nquick',
    description:
      'Created a command line tool to quickly take notes using Clojure.'
  },
  {
    name: 'memoria',
    date: 'March 2015',
    url: 'http://ggruiz.me/memoria',
    sourceUrl: 'https://github.com/gruiz17/memoria',
    description:
      'Utilized ClojureScript (Clojure compiled to JavaScript) to create a web-based memory game.'
  },
  {
    name: 'künstler',
    date: 'December 2014',
    sourceUrl: 'https://github.com/gruiz17/kunstler',
    description:
      'Created a GitHub commit graph art maker using an HTML5 Canvas-based tool for the UI. Through AJAX, the UI sends data based on a user’s art to a Sinatra server to pass the data to another Ruby script to make fake commits.'
  },
  {
    name: 'clouded',
    date: 'October 2014',
    url: 'http://ggruiz.me/clouded',
    sourceUrl: 'https://github.com/gruiz17/clouded',
    description:
      "Utilized JavaScript, jQuery, and the Soundcloud API to create a music player that plays a user's likes on Soundcloud while showing cool visualizations (made with HTML5 Canvas)."
  },
  {
    name: 'Canvas Scrolling Stars',
    date: 'August 2014',
    url: 'http://ggruiz.me/canvas-scrolling-stars',
    sourceUrl: 'https://github.com/gruiz17/canvas-scrolling-stars',
    description:
      'Used CoffeeScript and HTML5 Canvas to create a general-purpose scrolling star background for future HTML5/JS games. The link is a tech demo showing off different things you can do with the background.'
  },
  {
    name: 'Coffee Break',
    date: 'May 2014',
    url: 'http://ggruiz.me/coffee-break',
    sourceUrl: 'https://github.com/gruiz17/coffee-break',
    description:
      'Used Canvas, CoffeeScript, and a touch of jQuery to build an Arkanoid-style game.'
  },
  {
    name: 'dogeapi-clojure',
    date: 'April 2014',
    sourceUrl: 'http://github.com/gruiz17/dogeapi-clojure',
    description:
      '(Deprecated) Built a DogeAPI wrapper in Clojure. Released it onto Clojars.'
  },
  {
    name: 'Plots and Shenanigans',
    date: 'March 2014',
    url: 'http://ggruiz.me/plots-and-shenanigans',
    sourceUrl: 'https://github.com/gruiz17/plots-and-shenanigans',
    description:
      'Used d3.js to visualize several CSV datasets I created through my previous web scraping projects. Used underscore.js to make some things easier.'
  },
  {
    name: 'Reddit Search Download',
    date: 'February 2014',
    sourceUrl: 'http://github.com/gruiz17/reddit-search-download',
    description:
      'Small script to download reddit search results in JSON or XML format.'
  },
  {
    name: 'YC Scraper',
    date: 'February 2014',
    sourceUrl: 'http://github.com/gruiz17/ycscraper',
    description: 'Scraped some data about YC Companies using Ruby.'
  },
  {
    name: 'Death Row',
    date: 'February 2014',
    sourceUrl: 'http://github.com/gruiz17/deathrow',
    description:
      "Scraped data about Texas's executed prison inmates using Ruby."
  },
  {
    name: 'Explosions',
    date: 'March 2013',
    url: 'http://ggruiz.me/explosions',
    sourceUrl: 'https://github.com/gruiz17/explosions',
    description:
      'Even more fancy SVG visuals with d3.js. No music sadly. Made for 2013 Spring CSUA Hackathon.'
  },
  {
    name: 'Weeknd3',
    date: 'March 2013',
    url: 'http://ggruiz.me/weeknd3',
    sourceUrl: 'https://github.com/gruiz17/weeknd3',
    description:
      'Fancy d3.js/SVG visuals set to The Weeknd\'s "Echoes of Silence."'
  },
  {
    name: 'Ripple',
    date: 'November 2012',
    url: 'http://github.com/gruiz17/ripple',
    description:
      'First hackathon project. Text-based adventure game in Python with a choice system.'
  }
]

export function load() {
  return {
    projects
  };
}