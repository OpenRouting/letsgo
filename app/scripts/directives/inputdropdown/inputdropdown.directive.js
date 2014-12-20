/**
 * Created by christopherfricke on 12/15/14.
 */
angular.module('searchdropdown', [])

.filter('filterout', function() {
  return function(array, test) {
    var list = [];
    for (var i in array){
      if (!(array[i] === test)) list.push(array[i])
    }
    return list;
  };
})
.directive('searchdropdown', ['$filter', function($filter) {

  function link(scope, element, attrs) {
    scope.show=false;

    scope.setShow = function(show){
      if (show && scope.selected != null) {
        scope.show = true
      } else {
        scope.show = false;
      }
    };

    scope.selectItem = function(item){
      scope.selected = item;
      scope.text = item.properties.name;
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
      items: '=',
      remove: '=',
      selected: '='
    },
    templateUrl: 'scripts/directives/inputdropdown/inputdropdown.tpl.html',
    link: link
  };
}]);
