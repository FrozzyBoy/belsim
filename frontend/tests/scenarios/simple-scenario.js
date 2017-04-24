let tabsPage = require('../page-objects/tabsPage');
let expectedTabsNames = require('../mock-data/tabs-names');
let productionTab = require('../page-objects/tabs-data/production');

describe('check tabs', () => {
    beforeAll(() => {
        browser.get('http://localhost:8880/');
    })

    it('resource panel should be hidden', () => {
        productionTab.isPanelVisible().then((isPanelVisible) => {
            return expect(isPanelVisible).toBeFalsy();
        }).then(() => {
            return productionTab.clickChbx();
        }).then(() => {
            return expect(productionTab.isPanelVisible()).toBeTruthy();
        }).then(() => {
            return productionTab.clickChbx();
        }).then(() => {
            return expect(productionTab.isPanelVisible()).toBeFalsy();
        })
    })

    it('check # of tabs', () => {


        let tabsCount = tabsPage.getTabsCount();
        expect(tabsCount).toBe(10);
    });

    xit('first tab name should be "Производство"', () => {
        let tabName = tabsPage.getTabText(0);
        expect(tabName).toEqual('Производство');
    });

    it('check tabs names', () => {
        let tabsNames = tabsPage.getTabsNames();
        expect(tabsNames).toEqual(expectedTabsNames);
    });
});