var app = angular.module("dartsScore", []);
var app = angular.module('dartsScore', ['ngAnimate']);

app.controller("firstCtrl", function($scope, $rootScope) {
  $scope.player1;
  $scope.player2;
  $scope.selectgame;
  $scope.selectrounds;
  $scope.submit = function() {
    $rootScope.$broadcast('myEvent', {
      myPlayer1: $scope.player1,
      myPlayer2: $scope.player2,
      selectGame: $scope.selectgame,
      selectRounds :$scope.selectrounds
    })
    $scope.onsubmit = true;
  }
  $scope.$on('clickToMenu', function(event, message) {
    $scope.onsubmit = false;
  })

});

app.controller("secondCtrl", function($scope, $rootScope) {
  $scope.myPlayer1;
  $scope.myPlayer2;
  $scope.selectGame;
  $scope.selectRounds;

  $scope.$on('myEvent', function(event, message) {
    $scope.onsubmit = true;
    $scope.gamesettings = true;
    $scope.myPlayer1 = message.myPlayer1;
    $scope.myPlayer2 = message.myPlayer2;
    $scope.selectGame = message.selectGame;
    $scope.selectRounds = message.selectRounds;
  })
  $scope.goToMenu = function() {
    $rootScope.$broadcast('clickToMenu', {});
    $scope.onsubmit = false;
  }
});
