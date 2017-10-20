// Keys/Global Variables
var keys = require("./keys");
var input = process.argv[2];
var userInput = "";



// ***TWITTER***
var Twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);

var params = { screen_name: 'Ghostmeat3' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(error);
        return;
    };
});



// ***TW33T H4XX***
var latestTweets = require('latest-tweets')

latestTweets('Ghostmeat3', function(err, tweets) {
    console.log(tweets)
});



// ***SPOTIFY***
// var Spotify = require('node-spotify-api');

// var spotify = new Spotify(keys.spotifyKeys);

// spotify.search({
//         type: 'track',
//         query: input
//     }).then(function(response) {
//         console.log(response);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });



// ***OMDB***
var omdb = require('omdb');

omdb.search(input, function(err, movies) {
    if (err) {
        return console.error(err);
    }

    if (movies.length < 1) {
        return console.log('No movies were found!');
    }

    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });

});

omdb.get({ title: input }, true, function(err, movie) {
    if (err) {
        return console.error(err);
    }

    if (!movie) {
        return console.log('Movie not found!');
    }

    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);

});