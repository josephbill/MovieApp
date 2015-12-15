'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:EditmovieCtrl
 * @description
 * # EditmovieCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('EditmovieCtrl', function ($scope,$routeParams,MyFactory) {

$scope.movie_id = $routeParams._id;//receive the route parameter  	
  MyFactory.get({ _id: $scope.movie_id}, function(response){
         //here we pass a movie id & get a response - Object
            $scope.movie = response;      
       	}); 

  });
