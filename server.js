var http = require('http');
var fs = require("fs");
var Twitter = require("twitter");

var consumerKey = process.env.TWITTER_CONSUMER_KEY;
var consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
var accessTokenKey = process.env.TWITTER_ACCESS_TOKEN_KEY;
var accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;


var client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessTokenKey,
  access_token_secret: accessTokenSecret
});

var arr = JSON.parse(fs.readFileSync('data.json', 'utf8'));

setTimeout(function () {
  
  // Get random quote
  var message = arr[Math.floor(Math.random() * arr.length) + 1].message;
  
  //  Send twitt
  client.post('statuses/update', {status: message },  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet); 
    console.log(response);
  });

}, 1800000);
