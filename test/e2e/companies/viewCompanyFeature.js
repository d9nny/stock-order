describe('Companies page', function() {
  it('has a companies table', function() {
    browser.get('http://localhost:3000/#/companies');
    var col1Class = element(by.css('.table-striped'));
    expect(col1Class.isPresent()).toBe(true);
  });
});

// describe('companies in table', function() {
//   it('has a list of companies in the table', function() {
//     browser.get('http://localhost:3000/#/companies');
//     var companyNames = element.all(by.repeater('name in name.list')).getText();
//     expect(companyNames).toEqual(["Sainsburys", "Tugo", "Tuco"]);
//   });
// });

// describe('budget in table', function() {
//   it('has a list of company budgets in the table', function() {
//     browser.get('http://localhost:3000/#/companies');
//     var companyBudgets = element.all(by.repeater('name in name.list')).getText();
//     expect(CompanyBudgets).toEqual(["£1000", "£2000", "£5000"]);
//   });
// });

describe('editing an entry', function() {
  it('has an edit button', function() {
    browser.get('http://localhost:3000/#/companies');
    var editButton = element(by.css('.glyphicon-pencil'));
    expect(editButton.isPresent()).toBe(true);
  });
});

describe('deleting an entry', function() {
  it('has a delete button', function() {
    browser.get('http://localhost:3000/#/companies');
    var trashButton = element(by.css('.glyphicon-trash'));
    expect(trashButton.isPresent()).toBe(true);
  });
});