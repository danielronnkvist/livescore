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
          var teams = $(this).find('.game').find('span').text();
          teams = teams.split(" - ");
          var scores = $(this).find('.standing').find('span').text();
          scores = scores.split(" - ");
          var game = {
            "home": {
              "name": teams[0],
              "score": scores[0]
            },
            "away": {
              "name": teams[1],
              "score": scores[1]
            },
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
