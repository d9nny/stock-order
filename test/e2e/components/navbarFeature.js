describe('Home template ', function() {
  it('link to home page works', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('Home')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/');
  });
});

// describe('User log in template ', function() {
//   it('link to user log in works', function() {
//     browser.get('http://localhost:3000/');
//     element(by.linkText('Log in')).click();
//     expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/userLogIn');
//   });
// });