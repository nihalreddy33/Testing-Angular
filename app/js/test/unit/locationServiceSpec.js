describe("Testing Service Layer", function () {
    beforeEach(module("testingApp"));

    beforeEach(inject(function (_locationService_, _$q_, _$httpBackend_, _$rootScope_) {
        $q = _$q_;
        locationService = _locationService_;
        $httpBackend = _$httpBackend_;
        $scope = _$rootScope_.$new();
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
        //This way it makes sures our code has not Requests..
    });

    it('Should Check if we are getting data from Service Layer', function () {
        $httpBackend.whenGET('json/location.json').respond({
            location: "Hyderabad"
        }, {
            location: "Guntur"
        });
        locationService.getLocations = function () {
            var deffered = $q.defer();

            return deffered.promise;
        }
        $httpBackend.flush();
        expect(locationService.getLocations).toBe(true);
    });
});