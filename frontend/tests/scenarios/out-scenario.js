let outputPage = require('../page-objects/output-page');
let expectedOutputValues = require('../mock-data/output_results');

describe('check outputs data', () => {
    beforeAll(() => {
        browser.get('http://localhost:8889/simulation/simulationResults');
    })

    it('check outputs values', () => {
        let mediansValues = outputPage.getMedianValues();
        expect(mediansValues).toEqual(expectedOutputValues);
    });
})