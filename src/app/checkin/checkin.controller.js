(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinController', CheckinController);

  /** @ngInject */
  function CheckinController($scope, $http) {
     var JOBS_GET_URL = "https://red-wdp-api.herokuapp.com/api/mars/jobs";
     var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

     $scope.colonist = {};

   //   This is the GET API request setup.
     $http({
        method: 'Get',
        url: JOBS_GET_URL
     }).then(function(response){
        console.log(response);
        $scope.jobs = response.data.jobs;
     }, function(error){
        console.log(error);
      //   Handle it yourself, jerk!
     });
     // This is the POST API setup.
     $scope.login = function (event) {
        event.preventDefault();

        $http({
           method:'POST',
           url: COLONIST_POST_URL,
           data: { "colonist":$scope.colonist}
        })
        .then(function(response) {
           console.log(response)
         //   navigate to next page.
        }, function(error) {
           console.log(error);
        });

     };





  }

})();
