describe('Company template', function() {
  it('link to companies works', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('Companies')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/companies');
  });
});

