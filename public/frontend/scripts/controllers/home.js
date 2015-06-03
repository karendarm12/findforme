'use strict';

/**
 * @ngdoc function
 * @name findformeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the findformeApp
 */
angular.module('find4me')
 .controller('HomeController', function($location) {
    var home = this;

    home.navegarResultado = function(lenguaje) {
    	$location.path('/resultado/' + lenguaje);
    };

    home.scrollTo = function(id) {
    	var elementToScroll = document.getElementById(id);
    	elementToScroll.scrollIntoView();
    };

    $('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});
  });
