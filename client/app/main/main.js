'use strict';

angular.module('emswebportalApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })

      .when('/RegisterStep2.html', {
        templateUrl: 'app/main/RegisterStep2.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })

      .when('/RegisterStep3.html', {
        templateUrl: 'app/main/RegisterStep3.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })

      .when('/Success.html', {
        templateUrl: 'app/main/Success.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      });
  });
