exports.index = function(req, res){
  res.render('index.html');
}

exports.info = function(req, res){
  var jsdom = require("jsdom");

  jsdom.env({
    url: 'http://213.180.74.118/shfOnline/svescore.aspx',
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (errors, window) {
      var $ = window.$;
      if($("table").length > 0){
        // get scores
      }else{
        res.end("false");
      }
    }
  });
}
