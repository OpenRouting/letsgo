/**
 * Created by christopherfricke on 12/15/14.
 */
angular.module('searchdropdown', [])
.directive('searchdropdown', [function() {

  function link(scope, element, attrs) {
    scope.$watch('text', function(){console.log(scope.text)})
  }

  return {
    restrict: 'E',
    transclude: true,
    scope: {
      text: '=',
      items: '=',
      show: '='
    },
    templateUrl: 'scripts/directives/inputdropdown/inputdropdown.tpl.html',
    link: link
  };
}]);
