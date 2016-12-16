app.service('productService', function($http) {

  var baseUrl = 'http://localhost:8000/api/products/';

  this.saveProduct = function (product) {
    return $http.post(baseUrl, product).then(function(res) {
      return res.data;
    });
  };

  this.deleteItem = function (product) {
    return $http.delete(baseUrl + product).then(function(res) {
      return res.data;
    });
  };


});
