/**
 * Created by christopherfricke on 12/15/14.
 */
angular.module('searchdropdown', [])
.directive('searchdropdown', ['$filter', function($filter) {

  function link(scope, element, attrs) {
    scope.show=false;
    scope.pm = {
      selectedItem: undefined
    };

    scope.setShow = function(show){
      if (show && scope.pm.selectedItem != null) {
        scope.show = true
      } else {
        scope.show = false;
      }
    };

    scope.selectItem = function(item){
      scope.pm.selectedItem = item;
      console.log(item.id, scope.pm.selectedItem.id);

    };

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
      items: '='
    },
    templateUrl: 'scripts/directives/inputdropdown/inputdropdown.tpl.html',
    link: link
  };
}]);
