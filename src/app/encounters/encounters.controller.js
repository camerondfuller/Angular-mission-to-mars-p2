(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersController', EncountersController);

  /** @ngInject */
  function EncountersController($scope, $http, $state) {

     var ENCOUNTERS_GET_URL = "https://red-wdp-api.herokuapp.com/api/mars/encounters";

     $scope.encounters={};

    //   This is the GET API request setup.
     $http({
        method: 'GET',
        url: ENCOUNTERS_GET_URL
     }).then(function(response){
        $scope.encounters = response.data.encounters;
     }, function(error){
        console.log(error);
      //   Handle it yourself, jerk!
     });




    }

    })();
