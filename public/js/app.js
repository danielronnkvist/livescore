var app = angular.module('live', []);

app.controller('view', function ($scope, $http){
  $http.get('/info').
    success(function (data, status, headers, config){
      $scope.games = data;
    });
});
