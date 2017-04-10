let tabsPage = require('../page-objects/tabsPage');

describe('Protractor Demo App', () => {
    it('tabs count should be 10', () => {
        browser.get('http://localhost:8080/');

        let tabsCount = tabsPage.getTabsCount();
        expect(tabsCount).toBe(10);
    });

    it('first tab name should be "Производство"', () => {
        let tabName = tabsPage.getTabText(0);
        expect(tabName).toEqual('Производство');
    });
});