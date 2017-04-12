let tabsPage = require('../page-objects/tabsPage');
let expectedTabsNames = require('../mock-data/tabs-names');

describe('check tabs', () => {
    it('check # of tabs', () => {
        browser.get('http://localhost:8880/');

        let tabsCount = tabsPage.getTabsCount();
        expect(tabsCount).toBe(10);
    });

    it('first tab name should be "Производство"', () => {
        let tabName = tabsPage.getTabText(0);
        expect(tabName).toEqual('Производство');
    });

    it('check tabs names', () => {
        let tabsNames = tabsPage.getTabsNames();
        expect(tabsNames).toEqual(expectedTabsNames);
    });
});