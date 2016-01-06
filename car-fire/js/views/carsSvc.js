angular.module('car-fire')
.service('carsSvc', function ($firebaseObject, $firebaseArray) {
    var url = 'https://car-fire.firebaseio.com/';

    this.addCar = function (newCar) {
        var ref = new Firebase(url + 'cars')
        return $firebaseArray(ref).$add(newCar);
    }

    this.getCars = function () {
        var ref = new Firebase(url + 'cars')
        return $firebaseArray(ref);
    }

    this.getCar = function (carId) {
        var ref = new Firebase(url + 'cars/' + carId)
        return $firebaseObject(ref);
    }

    this.getComments = function (carId) {
        var ref = new Firebase(url + 'comments/' + carId);
        return $firebaseArray(ref);
    }
});