'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:PayrollCtrl
 * @description
 * # PayrollCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
//parse new factory,service to the function parentheses ...in the code below the function parentheses is where u passs methods required
  .controller('PayrollCtrl', function ($scope,payrollService,payrollFactory) {
     //frist we create a service 
     //we inject the service payrollService.js
     $scope.answer = payrollService.staffPayroll(18000,2000,250,1500);
     $scope.answer1 = payrollFactory.alumniPayroll(18000,2000);
  });
