(function() {
  'use strict';

  angular
    .module('red')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {

     $rootScope.state = $state;

    $log.debug('Hello you fancy gentleman!');
    $rootScope.$on('$stateChangeStart', function(event, toState){
      $rootScope.stateName = toState.name;
   });
  }

})();
