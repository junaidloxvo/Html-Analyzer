/* --- Made by justgoscha and licensed under MIT license --- */

var app = angular.module('htmlanalyzer', []);

app.directive('htmlanalyzer', function() {
	var index = -1;

	return {
		restrict: 'E',
		scope: {
			searchParam: '=ngModel',
			suggestions: '=data',
			onType: '=onType',
			onSelect: '=onSelect',
			autocompleteRequired: '='
		},
		controller: ['$scope', function($scope){

			$scope.element = {};
			$scope.select = function(val){
				alert(val);
				$scope.value = "Changed";
				$scope.$apply();
			};

			$scope.loadIframe = function(){
				
				document.getElementById('iframe').src="http://"+$scope.element.url;
				  
			};

		}],
		link: function(scope, element, attrs){

			document.getElementById("url").addEventListener("click", function(){


			});


		},
		templateUrl: 'view/template.html'
	};
});




