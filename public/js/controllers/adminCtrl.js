app.controller('adminCtrl', function($scope, productService, galleryService) {

  $scope.product = {};

  $scope.sendProduct = function(product) {
    productService.saveProduct(product).then(function(data){
      $scope.products.push(data);
      $scope.product.name = null;
      $scope.product.description = null;
      $scope.product.price = null;

      console.log("From server: ",data);
    });
  };

  $scope.deleteItem = function (product, index) {
    productService.deleteItem(product._id).then(function(data) {
      $scope.products.splice(index, 1);
    });
  }

  $scope.getProduct = function() {
    galleryService.sendProducts().then(function(data) {
      $scope.products = data;
      console.log("From server: ", data);
    });

  };
  $scope.getProduct();



});
