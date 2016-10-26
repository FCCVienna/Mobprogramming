const https = require('https');
const cheerio = require('cheerio');

function getLink() {
  var userInput = process.argv[2];
  console.log(userInput);
  https.get(userInput, function(res) {
    //console.log(res);
    res.setEncoding("utf8");
    res.on("data", function(a) {
      var $ = cheerio.load(a);
      //var linkArray = $('a').html().split('\n');
      $('a').attr('href').filter((index,el)=>{
        if(el){console.log(el)}
      });
    });
    res.on('end',()=>{console.log('response ended')})
  });
}

getLink();
