angular.module('car-fire')
    .controller('carsCtrl', function ($scope, carsSvc) {
        // $scope.test = "carsCtrl";
        $scope.createNewCars = function (newCar) {
            carsSvc.addCar(newCar);
        }  
        $scope.cars = carsSvc.getCars();
    });