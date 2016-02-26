(function() {
   'use strict';

   angular
   .module('red')
   .controller('CheckinController', CheckinController);

   /** @ngInject */
   function CheckinController($scope, $http, $rootScope, $state, $cookies) {
      var JOBS_GET_URL = "https://red-wdp-api.herokuapp.com/api/mars/jobs";
      var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

      $scope.colonist = {};

      //   This is the GET API request setup.
      $http({
         method: 'GET',
         url: JOBS_GET_URL
      }).then(function(response){
         console.log(response);
         $scope.jobs = response.data.jobs;
      }, function(error){
         console.log(error);
         //   Handle it yourself, jerk!
      });
      // This is the POST API setup.
      $scope.showValidation = false;
      $scope.login = function (event) {
         event.preventDefault();
         if($scope.checkinForm.$invalid) {
            $scope.showValidation=true;
         } else {
            $http({
               method:'POST',
               url: COLONIST_POST_URL,
               data: { "colonist":$scope.colonist}
            })
            .then(function(response) {
               console.log(response);
               $cookies.putObject('colonist-info', response.data.colonist);
               console.log($rootScope.colonist_id);
               $state.go('encounters');
               //   navigate to next page.
            }, function(error) {
               console.log(error);
            });
         }
      };





   }
}


)();
