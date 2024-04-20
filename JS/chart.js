//Chart
// This is the dataset for the chart
var dataset = [
  { name: "Programming", percent: 34.1 },
  { name: "Cyber Security", percent: 27.7 },
  { name: "Design", percent: 24.5 },
  { name: "Digital marketing", percent: 13.7 },
];

//Chart style
var pie = d3.layout
  .pie()
  .value(function (d) {
    return d.percent;
  })
  .sort(null)
  .padAngle(0.03);

var w = 250,
  h = 250;

var outerRadius = w / 2;
var innerRadius = 80;

var color = d3.scale.category10();

var arc = d3.svg.arc().outerRadius(outerRadius).innerRadius(innerRadius);

// Create pie chart using D3.js
var svg = d3
  .select("#chart")
  .append("svg")
  .attr({
    width: w,
    height: h,
    class: "shadow",
  })
  .append("g")
  .attr({
    transform: "translate(" + w / 2 + "," + h / 2 + ")",
  });
var path = svg
  .selectAll("path")
  .data(pie(dataset))
  .enter()
  .append("path")
  .attr({
    d: arc,
    fill: function (d, i) {
      return color(d.data.name);
    },
  });

// Animate pie chart transitions
path
  .transition()
  .duration(1000)
  .attrTween("d", function (d) {
    var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
    return function (t) {
      return arc(interpolate(t));
    };
  });

// Display additional data and legend for the pie chart
var restOfTheData = function () {
  var text = svg
    .selectAll("text")
    .data(pie(dataset))
    .enter()
    .append("text")
    .transition()
    .duration(200)
    .attr("transform", function (d) {
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("dy", ".2em")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.data.percent + "%";
    })
    .style({
      fill: "#fff",
      "font-size": "10px",
    });

  var legendRectSize = 20;
  var legendSpacing = 7;
  var legendHeight = legendRectSize + legendSpacing;

  var legend = svg
    .selectAll(".legend")
    .data(color.domain())
    .enter()
    .append("g")
    .attr({
      class: "legend",
      transform: function (d, i) {
        //Just a calculation for x & y position
        return "translate(-35," + (i * legendHeight - 65) + ")";
      },
    });
  legend
    .append("rect")
    .attr({
      width: legendRectSize,
      height: legendRectSize,
      rx: 20,
      ry: 20,
    })
    .style({
      fill: color,
      stroke: color,
    });

  legend
    .append("text")
    .attr({
      x: 20,
      y: 15,
    })
    .text(function (d) {
      return d;
    })
    .style({
      fill: "#237",
      "font-size": "12px",
    });
};
setTimeout(restOfTheData, 1000);
