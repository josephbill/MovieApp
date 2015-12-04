'use strict';

/**
 * @ngdoc service
 * @name moviesApp.payrollService
 * @description
 * # payrollService
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('payrollService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //staff payroll methdology example
  this.staffPayroll = function(basicSal,allowances,tax,nssf){
  var netPay = (basicSal + allowances) - (tax + nssf);
  if (netPay > 2000){

  	  return netPay + "you get 5000 christmas award:-)";

  }
else{
  	  return netPay + "you get 2000 christmas award:-)";


}
  };//end
  this.partnersPayroll = function(serviceFee,tax){
  	var total = (serviceFee - tax);
  	return total; 
  };


  });




