'use strict';

angular.module('StockOrderApp.controllers').controller('AboutUsController', [ function() {
	var self = this;
  
  self.companies = [
    {
      'name': 'Why atlantic?',
      'description': "Atlantic Group consists of three individual companies each providing innovative solutions in their own specialist areas. We operate independently or work seamlessly to provide you with a full turnkey solution. Specialists in the food and beverage sector, our client base includes some of the country's best known brands."
    },
    {
      'name': 'Creative',
      'description': 'For twenty five years, we have been thinking of new ways to build our client’s brands, create new marketing opportunities and achieve sales growth for them. Our in depth knowledge of the food and drink sector means that whether you are a fledgling business or national brand our expertise can give you a competitive edge.'
    },
    {
      'name': 'Print',
      'description': 'The key to our success is our innovation and reliability. The expertise and experience of utilising the latest print processes and materials and with a dedicated team communicating with you at every stage, you can rest assured that your projects are correct and on schedule.'
    },
    {
      'name': 'Digital',
      'description': 'The key to our success is our innovation and reliability. The expertise and experience of utilising the latest technologies and with a dedicated team communicating with you at every stage, you can rest assured that your projects will look fantastic on any screen.'
    },
    {
      'name': 'Interiors',
      'description': 'Our Interiors team design concepts in partnership with our clients, in every step of the way from the initial conceptualisation to finalization of your fit out and beyond. Our ultimate goal is to ensure that our clients outlets become models of success in their sector.'
    },
    {
      'name': 'Shopfit',
      'description': 'At Atlantic, we have a wealth of experience in carrying out shopfitting projects and developing retail display furniture throughout the UK and for some of the country’s best known retailers. We fit out a wide range of retail spaces from fast food outlets and universities to fashion stores and leisure park outlets.'
    }
  ];

}]);

