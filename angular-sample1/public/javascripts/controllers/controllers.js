var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
  $http.get('data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'reknown';
  });
}]);

artistControllers.controller('DetailsController', [
  '$scope',
  '$http',
  '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('data.json').success(function(data) {
      $scope.artists = data;
      $scope.whichItem = $routeParams.itemId;

      if ($routeParams.itemId > 0) {
        $scope.prevItem = Number($routeParams.itemId) - 1;
      } else { // prev points to last item
        $scope.prevItem = $scope.artists.length - 1;
      }

      if ($routeParams.itemId < $scope.artists.length - 1) {
        $scope.nextItem = Number($routeParams.itemId) + 1;
      } else { // next points to first element
        $scope.nextItem = 0;
      }
    });
  }
]);
