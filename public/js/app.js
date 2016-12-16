var app = angular.module('myShop', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: "/",
        controller: "mainCtrl"
      })
      .state('products', {
        url: "/products",
        templateUrl: "views/gallery.html",
        controller: "galleryCtrl"
      })
      .state('admin', {
        url: "/admin",
        templateUrl: "views/admin.html",
        controller: "adminCtrl"
      })
      .state('story', {
        url: "/story",
        templateUrl: "views/story.html",
        controller: "storyCtrl"
      });
  });
