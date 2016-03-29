describe("Testing Angular Unit App", function () {

    //Using our Mocks we Have to Initalize the Module first
    beforeEach(module("testingApp"));

    describe("Testing Main Controller", function () {

        var scope, ctrl, httpBackend;
        // Here we need to Inject our Controller
        beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
            scope = $rootScope.$new(); //We are creating new Child Object 
            ctrl = $controller('mainCtrl', {
                $scope: scope
            });
            httpBackend = $httpBackend;
        }));

        //Here We Are Testing The Scope Binding
        it("Should be able to Initailize the Scope", function () {
            // Here we Right what we Expect the Output to Be.
            expect(scope.testing).toBeDefined();
            expect(scope.testing).toBe("It is Working");
        });

        //Here We Are Testing The ADD DESTINATION
        it("Should add 2 Destinations to Destination List", function () {
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);

            scope.newDestinations = {
                city: "Pittsburgh",
                country: "USA"
            };
            scope.addDestination();
            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("Pittsburgh");
            expect(scope.destinations[0].country).toBe("USA");
        });

        //Here We Are Testing The REMOVE DESTINATION
        it("Should Remove The Last Destination", function () {
            expect(scope.destinations).toBeDefined();
            scope.destinations = [{
                    city: "Laredo",
                    country: "USA"
            },
                {
                    city: "Pitttsburgh",
                    country: "USA"
                }];
            expect(scope.destinations.length).toBe(2);
            scope.removeDestination(0);
            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("Pitttsburgh");
            expect(scope.destinations[0].country).toBe("USA");

        });
        /*
                it("Should Check if we are getting data from Service Layer", function () {
                    httpBackend.expectGET('../../../json/location.json').respond([{
                        location: "Hyderabad"
                    }, {
                        location: "Guntur"
                    }]);
                    // scope.$apply();
                    httpBackend.flush();
                    /* We write Flush to Flush all our Requests, So what it does is that it tells angular to respond to all the pending requests..
                    expect(scope.cities[0].location).toBe("Hyderabad");
                }); */

    });

});

/* We write Flush to Flush all our Requests, So what it does is that it tells angular to respond to all the pending requests..
                    expect(scope.cities[0].location).toBe("Hyderabad");*/