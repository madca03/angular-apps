var artistControllers = require('./controllers/controllers.js');

var app = angular.module('app', [
  'ngRoute',
  'artistControllers'
]);

// http://blog.panjiesw.com/posts/2013/09/angularjs-normal-links-with-html5mode/

app.config([
  '$routeProvider',
  '$locationProvider',

  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'javascripts/partials/list.html',
      controller: 'ListController'
    }).
    when('/details/:itemId', {
      templateUrl: 'javascripts/partials/details.html',
      controller: 'DetailsController'
    }).
    otherwise({
      redirectTo: '/home'
    });

    // http://stackoverflow.com/questions/18214835/angularjs-how-to-enable-locationprovider-html5mode-with-deeplinking
    // http://stackoverflow.com/questions/17350412/angularjs-1-1-5-automatically-adding-hash-tag-to-urls
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  }]);
