app.service('galleryService', function($http) {

  var baseUrl = 'http://localhost:8000/api/products';

  this.sendProducts = function () {
    return $http.get(baseUrl).then(function(res) {
      return res.data;
    })
  };


});
