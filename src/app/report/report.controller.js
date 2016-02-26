(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportController', ReportController);

  /** @ngInject */
  function ReportController($scope, $http, $state, $rootScope, $cookies, $filter) {
     var REPORT_GET_URL = "https://red-wdp-api.herokuapp.com/api/mars/aliens";
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $scope.report= {
      colonist_id: $cookies.getObject('colonist-info').id,
      date: $filter('date')(new Date(), 'yyyy-MM-dd')
   };
  //   This is the GET API request setup.
    $http({
      method: 'GET',
      url: REPORT_GET_URL
    }).then(function(response){
      console.log(response);
      $scope.aliens = response.data.aliens;
    }, function(error){
      console.log(error);
     //   Handle it yourself, jerk!
    });
    // This is the POST API setup.
    $scope.reportEncounter = function(event) {
       event.preventDefault();
       console.log($scope.report);
       $http({
          method:'POST',
          url: REPORT_POST_URL,
          data: {"encounter":$scope.report}
       })
       .then(function(response) {
          console.log(response);
          $state.go('encounters');
        //   navigate to next page.
       }, function(error) {
          console.log(error);
       });

    };





 }


})();
