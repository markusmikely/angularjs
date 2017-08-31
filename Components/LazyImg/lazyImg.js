angular.module('imageApp').component('lazyImg', {
  templateUrl: 'lazyImg.html',
  bindings: {
    image: '='
  }
});
angular.module('imageApp').directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                element.addClass('fade-in');
                window.img1 = element;
                console.log(element);
                //alert('image is loaded');
            });
            element.bind('error', function(){
                alert('image could not be loaded');
            });
        }
    };
});
