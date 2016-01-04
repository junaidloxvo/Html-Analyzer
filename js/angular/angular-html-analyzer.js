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
				document.getElementById('iframe').onload = function() {
					var body = document.getElementById('iframe').contentWindow.document.body;
					body.addEventListener("click",function(e){
						
						document.getElementById("editor").value = e.target.outerHTML;
						//alert(e.target);
					});
					};

			};

		}],
		link: function(scope, element, attrs){


			
			


		},
		templateUrl: 'view/template.html'
	};
});




