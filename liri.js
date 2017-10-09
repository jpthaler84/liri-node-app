var input = 

// ***TWITTER***
var Twitter = require('twitter');
// Create variable for access keys using import/export
 
var client = new Twitter(keys.twitterKeys);
 
var params = {screen_name: 'Ghostmeat3'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(error);
    return;
  };


});

// ***SPOTIFY***
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotifyKeys);


 
spotify
  .search({ type: 'track', query: input })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

  // ***OMDB***
  var omdb = require('omdb');
 
omdb.search('saw', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
 
    // Saw (2004) 
    // Saw II (2005) 
    // Saw III (2006) 
    // Saw IV (2007) 
    // ... 
});
 
omdb.get({ title: 'Saw', year: 2004 }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);
 
    // Saw (2004) 7.6/10 
    // Two men wake up at opposite sides of a dirty, disused bathroom, chained 
    // by their ankles to pipes. Between them lies... 
});