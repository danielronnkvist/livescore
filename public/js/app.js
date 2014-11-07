var app = angular.module('live', ['ngRoute']);

app.config(function ($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/templates/list.html',
      controller: 'MainCtrl'
    })
    .when('/Match/:matchId', {
      templateUrl: '/templates/match.html',
      controller: 'MatchCtrl'
    });
});

app.controller('MainCtrl', function ($scope, $http){
  $http.get('/info')
    .success(function (data, status, headers, config){
      if(data != "false")
      {
        $scope.games = data;
        $scope.leagues = [];
        for(var i = 0; i < $scope.games.length; i++)
        {
          if($scope.leagues.indexOf($scope.games[i].league) < 0)
            $scope.leagues.push($scope.games[i].league);
        }
      }
    });

  setInterval(function(){
    $http.get('/info')
      .success(function (data, status, headers, config){
        if(data != "false")
          $scope.games = data;
      });
  }, 21000);
});

app.controller('MatchCtrl', function ($scope, $http){
  $http.get('/info')
    .success(function (data, status, headers, config){
      if(data != "false")
        $scope = data[$routeParams];
    });
});
