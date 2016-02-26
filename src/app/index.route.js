(function() {
  'use strict';

  angular
    .module('red')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
    });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
      })
      .state('check-in',{
         url:'/check-in',
         templateUrl:'app/checkin/check-in.html',
         controller:'CheckinController'
      })
      .state('encounters',{
         url:'/encounters',
         templateUrl:'app/encounters/encounters.html',
         controller:'EncountersController'
      })
      .state('report',{
         url:'/report',
         templateUrl:'app/report/report.html',
         controller:'ReportController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
