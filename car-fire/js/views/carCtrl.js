angular.module('car-fire').controller('carCtrl', function ($scope, $stateParams) {
    var currentCarId = $stateParams.carId;
    
    $scope.car = carsSvc.getCar(currentCarId);
});