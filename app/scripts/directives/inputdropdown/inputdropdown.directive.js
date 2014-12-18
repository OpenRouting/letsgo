/**
 * Created by christopherfricke on 12/15/14.
 */
angular.module('searchdropdown', [])
.directive('searchdropdown', ['$filter', function($filter) {

  function link(scope, element, attrs) {
    scope.$watch('text', function(){

      scope.show = (scope.text != '' &&
                    scope.text != null &&
                    $filter('filter')(scope.items, scope.text).length > 0);
    });
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
