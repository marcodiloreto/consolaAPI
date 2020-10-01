const URL='http://www.7timer.info/bin/api.pl?lon=-34.60&lat=-58.37&product=civillight&output=json';

const request = require('request-promise');

request(URL)
.then( objeto => console.log(objeto) )
.catch( err => console.log(err) );

/* 
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/