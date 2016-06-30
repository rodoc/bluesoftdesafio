// create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute','ui.bootstrap', 'angularCharts']);
    
    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'component/Vote1.html',
                controller  : 'vote1Controller'
            })

            // route for the about page
            .when('/vote2', {
                templateUrl : 'component/Vote2.html',
                controller  : 'vote2Controller'
            })
            .when('/vote3', {
                templateUrl : 'component/Vote3.html',
                controller  : 'vote3Controller'
            })
            .when('/vote4', {
                templateUrl : 'component/Vote4.html',
                controller  : 'vote4Controller'
            })
            .when('/vote5', {
                templateUrl : 'component/Vote5.html',
                controller  : 'vote5Controller'
            })
            .when('/vote6', {
                templateUrl : 'component/Vote6.html',
                controller  : 'vote6Controller'
            })

            // route for the contact page
    });
    
    // create the controller and inject Angular's $scope
    scotchApp.controller('vote1Controller', function($scope,$location,$http) {
        // create a message to display in our view
        $scope.message = 'Certo';
        $scope.prod = {imagePaths: []};
    	$scope.prod.imagePaths = [
          	{ custom: 'component/Mcdonalds.jpg'},
          	{ custom: 'component/subway.gif'}
          ];
    	
        $scope.vote1 = function(){
        	$scope.image = "Mac%20Donald";
        	
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote2");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });
        }
        $scope.vote2 = function(){
        	$scope.image = "Subway";
        	
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote2");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });
        }
        
    });
    scotchApp.controller('vote2Controller', function($scope,$location,$http) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.prod = {imagePaths: []};
    	$scope.prod.imagePaths = [
          	{ custom: 'component/taco-bell.jpg'},
          	{ custom: 'component/burger-king.jpg'}
          ];
    	
    	$scope.vote1 = function(){
        	$scope.image = "Taco%20Bell";
        	
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote3");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });
        }
        $scope.vote2 = function(){
        	$scope.image = "Burger%20King";
        	
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote3");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });        	
        }
    });
    scotchApp.controller('vote3Controller', function($scope,$location, $http) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.prod = {imagePaths: []};
    	$scope.prod.imagePaths = [
          	{ custom: 'component/Dominos.png'},
          	{ custom: 'component/Mcdonalds.jpg'}
          ];
    	
    	$scope.vote1 = function(){
        	$scope.image = "Dominos";
        	
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote4");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });  
        	
        }
        $scope.vote2 = function(){
        	$scope.image = "Mac%20Donald";
        	
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote4");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });  
        }
    });
    scotchApp.controller('vote4Controller', function($scope,$location, $http) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.prod = {imagePaths: []};
    	$scope.prod.imagePaths = [
          	{ custom: 'component/subway.gif'},
          	{ custom: 'component/taco-bell.jpg'}
          ];
    	
    	$scope.vote1 = function(){
        	$scope.image = "Subway";
        	
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote5");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });  
        	
        }
        $scope.vote2 = function(){
        	$scope.image = "Taco%20Bell";
        	
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote5");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });  
        }
    });
    scotchApp.controller('vote5Controller', function($scope,$location, $http) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.prod = {imagePaths: []};
    	$scope.prod.imagePaths = [
          	{ custom: 'component/burger-king.jpg'},
          	{ custom: 'component/Dominos.png'}
          ];
    	
    	$scope.vote1 = function(){
        	$scope.image = "Burger%20King";
        	
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote6");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });  
        	
        }
        $scope.vote2 = function(){
        	$scope.image = "Dominos";
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start'+'/'+$scope.image
            	}).then(function(response) {
            		$scope.parsedData = response.data;
            		$location.path("/vote6");
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });  
        }
    });
    scotchApp.controller('vote6Controller', function($scope,$location,$http) {
        	$http
            ({
            	  method: 'GET',
            	  url: 'vote/start/count'
            	}).then(function(response) {
            		$scope.parsedData = response.data;            		
            			$scope.sw = $scope.parsedData[0].nome;
            			$scope.swv = $scope.parsedData[0].quant;
            			$scope.mcd = $scope.parsedData[1].nome;
            			$scope.mcdv = $scope.parsedData[1].quant;
            			$scope.bk = $scope.parsedData[2].nome;
            			$scope.bkv = $scope.parsedData[2].quant;
            			$scope.tb = $scope.parsedData[3].nome;
            			$scope.tbv = $scope.parsedData[3].quant;
            			$scope.d = $scope.parsedData[4].nome;
            			$scope.dv = $scope.parsedData[4].quant;
            		
            		$scope.config = {
                		    title: 'Restaurantes',
                		    tooltips: true,
                		    labels: false,
                		    mouseover: function() {},
                		    mouseout: function() {},
                		    click: function() {},
                		    legend: {
                		      display: true,
                		      //could be 'left, right'
                		      position: 'topright'
                		    }
                		  };

                		  $scope.data = {
                		    data: [{
                		      x: $scope.sw,
                		      y: [$scope.swv],
                		      tooltip:  $scope.sw +":"+$scope.swv
                		    }, {
                		      x: $scope.mcd,
                		      y: [$scope.mcdv],
                		      tooltip: $scope.mcd+":"+$scope.mcdv
                		    }, {
                		      x: $scope.bk,
                		      y: [$scope.bkv],
                		      tooltip: $scope.bk +":"+$scope.bk
                		    }, {
                		      x: $scope.tb,
                		      y: [$scope.tbv],
                		      tooltip: $scope.tb +":"+$scope.tbv
                		    }, {
                		      x: $scope.d,
                		      y: [$scope.dv],
                		      tooltip: $scope.d +":"+$scope.dv
                		    }]
                		  };
                  }, function(response) {
                    $scope.data = response.data || "Request failed";
                    this.status = response.status;
                });
    });