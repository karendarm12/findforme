'use strict';


angular.module('find4me', ['ngRoute', 'smoothScroll'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:  'HomeController as home',
        templateUrl: 'views/home.html'
      })
      .when('/resultado/:lenguaje', {
        controller:  'ResultadoController as resultado',
        templateUrl: 'views/resultado.html'
      })
      .otherwise({
        redirectTo:'/'
      })
  })
  
  
