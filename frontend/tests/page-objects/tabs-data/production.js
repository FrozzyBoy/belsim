let resourcePanel = element(by.css('.belsim-data-model__extended-sidenav'));
let cycleRows = element.all(by.css('.production table tr'))
let firstChbx = element.all(by.css('.production table tr')).first().element(by.css('.mat-checkbox-layout'))

module.exports = {
    isPanelVisible: () => {
        return resourcePanel.isDisplayed();
    },
    clickChbx: () => {
        return firstChbx.click();
    },
}