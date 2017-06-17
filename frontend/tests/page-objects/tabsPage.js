const tabs = element.all(by.css('.mat-tab-labels .mat-tab-label'));
const tabsContent = element.all(by.css('.mat-tab-body-wrapper .belsim-simulation__tab-content'));
const languageDD = element(by.css('.belsim-simulation__toolbar-language'));
const languageList = element.all(by.css('.cdk-overlay-container md-option'));
const inputList = element.all(by.css('.production md-input-container input'));

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
    getInputsNames: () =>{
        let inputsNames = [];

        return inputList.each(input =>
        {
            input.getAttribute('placeholder').then(text => {
                        inputsNames.push(text);
                    });
        }).then(()=>{
            return inputsNames;
        })
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
    },
    changeLanguage: () => {
        return languageDD.click().then(() => {
            return languageList.get(0).click();
        })
    },
    chooseValue: () =>{
        return inputList.get(0).getAttribute('value');
    },
    clickValue: ()=>{
        return inputList.get(0);
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
