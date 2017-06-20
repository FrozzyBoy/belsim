let tabsPage = require('../page-objects/tabsPage');
let expectedTabsNamesRu = require('../mock-data/tabs-names-ru');
let expectedTabsNamesEn = require('../mock-data/tabs-names-en');
let productionTab = require('../page-objects/tabs-data/production');
let expectedInputNamesRu = require('../mock-data/input-names-ru');
let expectedInputNamesEn = require('../mock-data/input-names-en');

describe('check tabs', () => {
    beforeAll(() => {
        browser.get('http://localhost:8889/simulation/modelData');
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
            return expect(productionTab.isPanelVisible()).toBeTruthy();
        })
    });

    it('check incremet of the value', () => {
        expect(tabsPage.chooseValue()).toEqual('5').then(() => {
            tabsPage.clickValue().click().then(() => {
                tabsPage.clickValue().sendKeys(protractor.Key.ARROW_DOWN).then(() => {
                    expect(tabsPage.chooseValue()).toEqual('4').then(() => {
                        tabsPage.clickValue().click().then(() => {
                            tabsPage.clickValue().sendKeys(protractor.Key.ARROW_UP).then(() => {
                                return expect(tabsPage.chooseValue()).toEqual('5');
                            })
                        })
                    })
                })
            })
        })
    });


    it('check # of tabs', () => {
        let tabsCount = tabsPage.getTabsCount();
        expect(tabsCount).toBe(10);
    });

    xit('first tab name should be "Производство"', () => {
        let tabName = tabsPage.getTabText(0);
        expect(tabName).toEqual('Производство');
    });

    it('check inputs names', () => {
        let inputNames = tabsPage.getInputsNames();
        expect(inputNames).toEqual(expectedInputNamesRu);
    });

    it('check tabs names', () => {
        let tabsNames = tabsPage.getTabsNames();
        expect(tabsNames).toEqual(expectedTabsNamesRu);
    });

    it('check inputs names in English', () => {
        browser.refresh().then(() => {
            tabsPage.changeLanguage().then(() => {
                let inputNames = tabsPage.getInputsNames();
                expect(inputNames).toEqual(expectedInputNamesEn);
            })
        })
    });

    it('check tabs names in English', () => {
        browser.refresh().then(() => {
            tabsPage.changeLanguage().then(() => {
                let tabsNames = tabsPage.getTabsNames();
                expect(tabsNames).toEqual(expectedTabsNamesEn);
            })
        })
    })
});