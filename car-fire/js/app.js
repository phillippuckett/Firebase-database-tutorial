var app = angular.module('car-fire', ['ui.router', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('cars', {
                url: '/cars',
                templateUrl: 'js/views/carsTmpl.html',
                controller: 'carsCtrl',
                resolve: {
                    carsRef: function (carsSvc) {
                        return carsSvc.getCars();
                    }
                }
            })
            .state('car', {
                url: '/car/:carId',
                templateUrl: 'js/views/carTmpl.html',
                controller: 'carCtrl',
                resolve: {
                    carRef: function (carService) {
                        return carService.getCar();
                    }
                }
            })
        $urlRouterProvider.otherwise('/cars');
    });