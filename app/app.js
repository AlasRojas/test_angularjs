'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('store', [
  'ngRoute'
]);


app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/newProduct', {
      templateUrl: 'newProduct/newProductView.html',
      controller: 'newProductController'
    })
    .when('/allProducts', {
      templateUrl: 'allProducts/allProductsView.html',
      controller: 'allProductsController'
    })
    .otherwise({redirectTo: '/allProducts'});
});


//config.inject = ['locationProvider', 'routeProvider'];
