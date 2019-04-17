(function () {
  'use strict';

  angular.module('jmzoom', [])
    .directive('jmZoom', jmZoom);

  jmZoom.$inject = ['$document'];
  function jmZoom($document) {
    var service = {
      restrict: 'A',
      scope: {
        jmpOptions: '=',
        callback: '=jmpCallback',
        onZoomIn: '=jmpOnZoomIn',
        onZoomOut: '=jmpOnZoomOut',
      },
      link: link
    };
    return service;

    ////////////////////////////

    link.$inject = ['$scope', '$element', '$attributes'];
    function link($scope, $element, $attributes) {
      var bootstrapped = false;
      var lastPlugin = null;
      var zoomIds = {};
      var options = {
        callback: function () {
          if ($scope.callback && $scope.callback()) {
            $scope.callback()();
          }
        },
        onZoomIn: function () {
          if ($scope.onZoomIn && $scope.onZoomIn()) {
            $scope.onZoomIn()();
          }
        },
        onZoomOut: function () {
          if ($scope.onZoomOut && $scope.onZoomOut()) {
            $scope.onZoomOut()();
          }
        },
      };

      //generic way that sets all (non-function) parameters of elevate zoom plus.
      if ($scope.jmpOptions) {
        angular.extend(options, $scope.jmpOptions);
      }

      //updates options dynamically by deeply watching the options object
      $scope.$watch('jmpOptions', function (newValue, oldValue) {
        if(!bootstrapped) {
          bootstrapped = true;
        } else {
          angular.extend(options, $scope.jmpOptions);
          preparePlugin($element, options);
        }
      }, true);
      preparePlugin($element, options);

      function preparePlugin(element, options) {
        var plugin = jQuery(angular.element(element)).zoom(options);
        return lastPlugin;
      }
    }
  }
})
();

