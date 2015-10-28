// Create an angular application called "sortApp"
var sortApp = angular.module('sortApp', [] );

// Define a controller "mainController" for you application, 
// making sure to pass in both the $scope and $http variables
sortApp.controller('mainController', function($scope, $http) {
    $http.get('data/salaries.json').then(function(response){
        //note response can have any value you want! response. data MUST be data, because it is the key, 
        //but $scope.data doesn't necessarily, but helps for HTML
        $scope.data = response.data
    })
})


	// Use and $http.get request to get the salary data
	
		// Set $scope.data equal to the data returned in your results
