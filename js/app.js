var myApp = angular.module("myApp", [])
.controller('myController', function($scope){
	console.log("hello Roshan Mali");
	
	$scope.userData = [
					  {
					    "Id":1,
					    "name": "John",
					    "phone":"9999999999",
					    "address": {
					      "address_line1": "ABC road",
					      "address_line2": "XYZ building",
					      "city": "pune",
					      "postalCode": "12455"
					    }
					  },
					  {
					    "Id":2,
					    "name": "Jacob",
					    "phone":"AZ99A99PQ9",
					    "address": {
					      "address_line1": "PQR road",
					      "address_line2": "ABC building",
					      "city": "pune",
					      "postalCode": "13455"
					    }
					  },
					  {
					    "Id":3,
					    "name": "Ari",
					    "phone":"145458522",
					    "address": {
					      "address_line1": "ABC road",
					      "address_line2": "XYZ building",
					      "city": "Mumbai",
					      "postalCode": "12455"
					    }
					  }
				];

			$scope.newUser = {};
        
            $scope.clickedUser = {};


			$scope.editUser = function (user) {
			
			$scope.clickedUser = user;
			};

			$scope.saveUser = function () {
				$scope.userData.push($scope.newUser);
				$scope.newUser = {};
			}

			$scope.updateUser = function (user) {
			
			};

	        $scope.deleteUser = function (user) {
			
			$scope.userData.splice($scope.userData.indexOf($scope.clickedUser),1);

			};
});
