'use strict';

//Control
app.controller('allProductsController',['$scope', 'productos', 
  function($scope, productos){

    productos.success(function(data) { 
		console.log(data);
		//sortFunction(data);
		$scope.productos = data;
	});

	$scope.sortProducts = function(type) { 
		sortFunction($scope.productos, type);
		//$scope.productos = sortFunction($scope.productos);
    };
  }
]);


function sortFunction(array, type) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
    	if (type == 'range') {
    		if (array[i - 1].range > array[i].range) {
		        done = false;
		        var tmp = array[i - 1];
		        array[i - 1] = array[i];
		        array[i] = tmp;
		    }
    	}else if (type == 'provider'){
    		if (array[i - 1].provider > array[i].provider) {
		        done = false;
		        var tmp = array[i - 1];
		        array[i - 1] = array[i];
		        array[i] = tmp;
		    }
    	}else if (type == 'price'){
    		if (array[i - 1].price > array[i].price) {
		        done = false;
		        var tmp = array[i - 1];
		        array[i - 1] = array[i];
		        array[i] = tmp;
		    }
    	}else if (type == 'isActive'){
    		if (array[i - 1].isActive > array[i].isActive) {
		        done = false;
		        var tmp = array[i - 1];
		        array[i - 1] = array[i];
		        array[i] = tmp;
		    }
    	}else if (type == 'nameOfProduct'){
    		if (array[i - 1].nameOfProduct > array[i].nameOfProduct) {
		        done = false;
		        var tmp = array[i - 1];
		        array[i - 1] = array[i];
		        array[i] = tmp;
		    }

    	}
      
    }
  }
}

//Servicio
app.factory('productos', ['$http', function($http) { 
  return $http.get('http://demo6292426.mockable.io/more-store') 
	.success(function(data) { 
		return data; 
	}) 
	.error(function(err) { 
		return err; 
	}); 
}]);