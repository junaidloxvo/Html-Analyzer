/**
 * 
 */'use strict';

var app = angular.module('app', ['ui.router','htmlanalyzer' ]).config(function($stateProvider, $urlRouterProvider) {

			$stateProvider.state('app', {
				url : '/app',
				template: '<div ui-view ></div>',
			}).state('app.home', {
                url: '/home',
                templateUrl: 'view/home.html',
                controller : 'MainCtrl'
           
            });

			$urlRouterProvider.otherwise('/app/home');

		});