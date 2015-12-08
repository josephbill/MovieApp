'use strict';

/**
 * @ngdoc service
 * @name moviesApp.payrollFactory
 * @description
 * # payrollFactory
 * Factory in the moviesApp.
 */
angular.module('moviesApp')
  .factory('payrollFactory', function () {
    // Service logic


    // Public API here
    return {
      alumniPayroll: function(serviceFee,year){
      //added logic point where u add ur logic/argument
      return serviceFee*1000;
      }
    };
  });
