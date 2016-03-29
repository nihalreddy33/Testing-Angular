testingApp.service("locationService", function ($q, $http) {

    this.getLocations = function () {
        var deffered = $q.defer();

        $http.get('json/location.json').then(function (data) {
            deffered.resolve(data);
        });

        return deffered.promise;
    }
});