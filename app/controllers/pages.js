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
        var games = [];
        $('.itemRowOnlineScoreAdvanced').each(function (index){
          var game = {
            "teams": $(this).find('.game').find('span').text(),
            "score": $(this).find('.standing').find('span').text(),
            "time": $(this).find('.time').find('span').text(),
            "league": $(this).find('.league').find('span').text()
          };
          games.push(game);
        })
        res.end(JSON.stringify(games));
      }else{
        res.end("false");
      }
    }
  });
}
