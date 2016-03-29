var testingApp = angular.module("testingApp", []);

testingApp.controller("mainCtrl", function ($scope, locationService) {

    var locations = locationService.getLocations();
    locations.then(function (data) {
        $scope.cities = data.data;
        console.log($scope.cities)
    });


    $scope.testing = "It is Working";

    $scope.destinations = [];
    $scope.newDestinations = {
        city: undefined,
        country: undefined
    };

    $scope.addDestination = function () {
        $scope.destinations.push({
            city: $scope.newDestinations.city,
            country: $scope.newDestinations.country
        });
    };

    $scope.removeDestination = function (index) {
        //$scope.destinations.pop();
        $scope.destinations.splice(index, 1);
    }
});