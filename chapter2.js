//this script takes the screenshot of the webpage
var page = require('webpage').create();
page.open('http://tinyowl.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});