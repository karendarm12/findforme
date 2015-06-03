'use strict';

/**
 * @ngdoc function
 * @name findformeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the findformeApp
 */
 angular.module('find4me')
 .controller('ResultadoController', function($routeParams, $http) {
 	var resultado = this;
 	resultado.lenguaje = $routeParams.lenguaje;

 	$http.get('https://api.github.com/search/repositories?q=language:' + resultado.lenguaje + '&sort=stars&order=desc')
 	.success(function(data) {
 		console.log(data);
 		resultado.repos = data.items;
 	})
 	.error(function() {
 		console.log('error');
 	});

});
