require('./box.js');
let boxData = require('./data.json');

var min = Infinity,
    max = -Infinity;

function drawAll(element, originData) {
    let objects = originData;
    let margin = { top: 10, right: 50, bottom: 20, left: 50 },
        width = 120 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var chart = d3.box()
        .whiskers(iqr(1.5))
        .width(width)
        .height(height);

    function draw(values) {
        var data = [];

        values.forEach((vals, valsIndex) => vals.forEach((elem, elemIndex) => {
            var e = Math.floor(valsIndex),
                r = Math.floor(valsIndex),
                s = Math.floor(elem),
                d = data[e];
            if (!d) d = data[e] = [s];
            else d.push(s);
            if (s > max) max = s;
            if (s < min) min = s;
        }));

        chart.domain([min, max]);

        d3.select(element).selectAll("svg").remove();

        var svg = d3.select(element).selectAll("svg")
            .data(data)
            .enter().append("svg")
            .attr("class", "box")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.bottom + margin.top)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(chart);
    };

    draw(objects.values);
}

// Returns a function to compute the interquartile range.
function iqr(k) {
    return function (d, i) {
        var q1 = d.quartiles[0],
            q3 = d.quartiles[2],
            iqr = (q3 - q1) * k,
            i = -1,
            j = d.length;
        while (d[++i] < q1 - iqr);
        while (d[--j] > q3 + iqr);
        return [i, j];
    };
}

module.exports = { drawAll: drawAll }