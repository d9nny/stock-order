'use strict';
describe('CompanyController', function() {
  beforeEach(module('StockOrderApp'));

  var ctrl,
      companyPath = 'http://localhost:3000/companies';

  beforeEach(inject(function($controller, $http, $location) {
    ctrl = $controller('CompanyController');
  }));

  describe('path', function() {
    it('initialises with a path', function() {
      expect(ctrl.path).toEqual(companyPath);
    });
  });


  describe('when searching for a company', function() {

    var httpBackend;

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
      .expectGET("http://localhost:3000/companies")
      .respond(
        { items: items }
        );
    }));
    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    var items = [
    {
      "name": "Sainsburys",
      "budget": "£1000"
    },
    {
      "name": "Tugo",
      "budget": "£3000"
    }
    ];

    it('displays search results', function() {
      ctrl.show();
      httpBackend.flush();
      expect(ctrl.companies.items).toEqual(items);
    });
  });
});
