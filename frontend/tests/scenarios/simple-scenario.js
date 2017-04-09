// spec.js
describe('Protractor Demo App', () => {
    it('should have a title', () => {
        browser.get('http://localhost:8080/');
        expect(browser.getTitle()).toEqual('Angular With Webpack');
    });
});