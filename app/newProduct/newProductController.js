'use strict';


app.controller('newProductController',['$scope', 
  function($scope){
  	var datos = {};
    $scope.sendProduct = function() {

    	datos.range = document.getElementsByClassName("rango")[0].value;
    	datos.description = document.getElementsByClassName("description")[0].value;
    	datos.nameOfProduct = document.getElementsByClassName("name")[0].value;
    	datos.provider = document.getElementsByClassName("provider")[0].value;
    	datos.sku = document.getElementsByClassName("sku")[0].value;
    	datos.picture = document.getElementsByClassName("picture")[0].value;
    	datos.price = document.getElementsByClassName("price")[0].value;
    	datos.isActive = document.getElementsByClassName("isActive")[0].checked;
    	datos.id = document.getElementsByClassName("id")[0].value;
    	datos.tags = [];
    	for (var i = 0; i < document.getElementsByClassName("tags").length; i++) {
    		if ( document.getElementsByClassName("tags")[i].checked ) {
    			datos.tags.push( document.getElementsByClassName("tags")[i].value ); 
    		}
    	}

    	console.log(datos);
    	
    	$scope.datos = datos;
    	
    };
    
  }
]);
