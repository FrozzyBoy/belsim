const outputValues = element.all(by.css('.output-data__chart .values .median-text'));

module.exports = {
    getMedianValues: () => {
        let medianValues = [];

        return outputValues.each(value => {
            value.getText().then(text => {
                medianValues.push(text);
            })
        }).then(() => {
            return medianValues;
        })
    }
}