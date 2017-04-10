const tabs = element.all(by.css('.mat-tab-labels .mat-tab-label'));
const tabsContent = element.all(by.css('.mat-tab-body-wrapper .belsim-simulation__tab-content'));

module.exports = {
    getTabsCount: () => {
        return tabs.count();
    },
    getTabText: (tabIndex) => {
        return tabsContent.get(tabIndex).getText();
    }
}
