app.controller('galleryCtrl', function($scope, galleryService) {

    $scope.products = {};

    $scope.getProduct = function() {
      galleryService.sendProducts().then(function(data) {
        $scope.products = data;
        console.log("From server: ", data);
      });
    };
      $scope.getProduct();


});
