const tabs = element.all(by.css('.mat-tab-labels .mat-tab-label'));
const tabsContent = element.all(by.css('.mat-tab-body-wrapper .belsim-simulation__tab-content'));

module.exports = {
    getTabsCount: () => {
        return tabs.count();
    },
    getTabText: (tabIndex) => {
        return tabsContent.get(tabIndex).getText();
    },
    clickAllTabs: () => {
        return tabs.each(tab => {
            tab.click();
            browser.sleep(500);
        });
    },
    getTabsNames: () => {
        let tabsNames = [];

        return tabs.each(tab => {
            waitForElementAppearance(tab).then(() => {
                tab.click().then(() => {
                    tab.getText().then(text => {
                        tabsNames.push(text);
                    });
                });
            });
        }).then(() => {
            return tabsNames;
        });
    }
}

function waitForElementAppearance(element) {
    let EC = protractor.ExpectedConditions;
    return browser.wait(EC.presenceOf(element), 5000).then(() => {
        return browser.wait(() => element.isDisplayed(), 5000).then(() => true);
    }).catch(() => {
        console.log("element is not displayed");
        return false;
    });
};
