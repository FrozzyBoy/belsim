module.exports = {
  init: function (app) {
    let data = require('./mock-data');

    app.get('/api/results/:id', (req, res) => {
      let count = req.params.id;
      let result = remapData(data);
      res.send(result);
    });

    function remapData(data) {
      let result = {
        creator: data.creator,
        timeStamp: data.timeStamp,
        data: sortData(data.data)
      }
      return result;
    };

    function sortData(data) {
      let result = [];
      data.forEach((d) => {
        d.responses.forEach((r) => {
          r.variable.forEach((variable) => {
            let name = variable.name;
            let timedValue = variable.timedValue;
            let newRes = null;
            result.forEach((res) => {
              if (res.name === name) {
                newRes = res;
              }
            });
            if (!newRes) {
              newRes = {
                name: name,
                values: []
              };
              result.push(newRes);
            };
            if (timedValue) {
              timedValue.forEach((x, i) => {
                if (!newRes.values[i]) {
                  newRes.values[i] = [];
                }
                newRes.values[i].push(x.value);
              });
            }
          });
        });
      });
      return findExtremums(result);
    };

    function findExtremums(data) {
      // data.forEach(valuesSet => {
      //   if (valuesSet.values && valuesSet.values.length) {
      //     valuesSet.values.forEach((values, valuesIndex) => {
      //       valuesSet.values[valuesIndex] = getExtremumsForArray(valuesSet.values[valuesIndex]);
      //     });
      //   };
      // });
      return data;
    };

    function getExtremumsForArray(arr) {
      arr.sort((a, b) => a - b);
      let min = arr[0];
      let max = arr[arr.length - 1];
      let minQuarter = arr[Math.trunc(arr.length * 0.25)];
      let maxQuarter = arr[Math.trunc(arr.length * 0.75)];
      let median = arr.length % 2 === 0 ?
        arr[Math.trunc(arr.length / 2) - 1]
        : ((arr[Math.trunc(arr.length / 2)] - arr[Math.trunc(arr.length / 2) - 1]) / 2);
      return {
        min: min,
        minQuarter: minQuarter,
        median: median,
        maxQuarter: maxQuarter,
        max: max
      };
    }
  }
}