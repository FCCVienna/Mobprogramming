const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
var link = '';

function getLink() {
  var userInput = process.argv[2];
  https.get(userInput, function(res) {
    res.setEncoding('utf8');
    res.on("data", function(a) {
      var $ = cheerio.load(a);
      // if item is not undefined, and therefor a valid link
      if ($('a').attr('href') != undefined) {
        // if link is an empty string and contains the word http
	    if (link == '' && $('a').attr('href').indexOf('http') != -1) {
          // write stream to links.txt file
          fs.appendFile('links.txt', $('a').attr('href') + '\n', (err) => {
            if (err) throw err;
          });
        }
      }
    });
    res.on('end',()=>{
      // reads first line of links.txt file
      fs.readFile('links.txt', 'utf8', (err, data) => {
      if (err) throw err;
        links = data.split('\n');
        console.log(links[0]);
      });
      // deletes file
      fs.unlinkSync('links.txt');
        
    });
  });
}

getLink();
