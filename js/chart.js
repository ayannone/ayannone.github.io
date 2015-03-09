// ********************************
// *****   D3 Visualization   *****
// ********************************

var svg;
var width = 340;
var height = 340;
var data = [];

// ***************************
// *****   bubbleChart   *****
// ***************************

var svgBubbleChart;

function buildSvgBubbleChart() {
  svgBubbleChart = d3.select("#bubbleChart")
    .append("svg")
      .attr("width",width)
      .attr("height",height)
      .style("background-color","grey")
      .style("margin","10px")
      .style("border","1px solid black");
};

function drawBubbleChart(data){
  var updateSelection = svgBubbleChart.selectAll("g").data(data);
  var enterSelection = updateSelection.enter();
  var enterUpdateSelection = enterSelection.append("g").attr("class","bubble");
  var exitSelection = svgBubbleChart.selectAll("g").data(data).exit();

  var div = d3.select("#bubbleChart").append("div")
    .attr("class", "tooltip")
        .style("opacity", 0);

  var force = d3.layout.force()
    .charge(0)
    .gravity(0.05)
    .nodes(data)
    .size([width-20,height-20]);

  force.start();

  enterUpdateSelection
    .append("circle")
      .attr("r",function(d,i){return radius = 40;});
      // .attr("r",function(d,i){return radius = 35 + d.level;});

  enterUpdateSelection
    .append("text");

  updateSelection.select("circle")
    .style("stroke","black")
    .style("fill", function(d, i) {
      switch (true) {
        case (d.level > 6):
          color = "blue";
          break;
        case (d.level <= 6 && d.level > 4):
          color = "steelblue"; // #ff7070"; light red
          break;
        case (d.level <= 4 && d.level > 0):
          color = "lightblue";
          break;
        default:
         color = "white"; //#fc6"; // light orange
      }
    return color;
  })

  .on("mouseover", function(d) {
    div.transition()
      .duration(200)
      .style("opacity", .9);
    div.html( d.skill + "<br />Level: " + d.level + "<br />" )
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
    })

  .on("mouseout", function(d) {
    div.transition()
      .duration(500)
      .style("opacity", 0);
    });

  updateSelection.select("text")//.slice(0,15)
    .text(function(d){ return d.skill.trim(); })
    .style("text-align","center")
    .style("font-size","8px")
    .style("color", "black");

  force.on("tick", function(e) {
    var q = d3.geom.quadtree(data),
      i = 0,
      n = data.length;

    while (++i < n) q.visit(collide(data[i]));

    svgBubbleChart.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });

    svgBubbleChart.selectAll("text")
      // .data(packages)
      .attr("dx", function(d) { return d.x-25; })
      .attr("dy", function(d) { return d.y; });
  });

  function collide(node) {

    var r = radius + (radius+1),
    // var r = node.radius + 16,
        nx1 = node.x - r,
        nx2 = node.x + r,
        ny1 = node.y - r,
        ny2 = node.y + r;
    return function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== node)) {
        var x = node.x - quad.point.x,
            y = node.y - quad.point.y,
            l = Math.sqrt(x * x + y * y);
        if (l < r) {
          l = (l - r) / l * 0.5;
          node.x -= x *= l;
          node.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2
          || x2 < nx1
          || y1 > ny2
          || y2 < ny1;
    };
  };

  exitSelection.remove();
}


// ************************
// *****   pieChart   *****
// ************************

var svgPieChart;

function buildSvgPieChart() {
  svgPieChart = d3.select('#pieChart')
    .append("svg")
      .attr("width",width)
      .attr("height",height)
      .style("background-color","grey")
      .style("margin","10px")
      .style("border","1px solid black");
};

function drawPieChart(data) {
  var div = d3.select("#pieChart").append("div")
    .attr("class", "tooltip")
      .style("opacity", 0);

  var arc = d3.svg.arc()
      .innerRadius(0)
      .outerRadius(150);

  var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) { return d.level; });

  var chart = svgPieChart.append("g")
      // .attr("transform", "translate(250,210)");
      .attr("transform", "translate(170,170)");

  var arcGs = chart.selectAll(".arc")
      .data(pie(data))
          .enter().append("g")
          .style("fill", function(d, i) {
      switch (true) {
        case (d.level > 6):
          color = "blue";
          break;
        case (d.level <= 6 && d.level > 4):
          color = "steelblue"; // #ff7070"; light red
          break;
        case (d.level <= 4 && d.level > 0):
          color = "lightblue";
          break;
        default:
         color = "#fc6"; // light orange
      }
    return color;
  });

  arcGs.append("path")
    .attr("d", arc)
    .style("stroke", "white")
    .style("stroke-width", 1);

  // function mouseover(d) {
  //     div.transition()
  //         .duration(200)
  //         .style("opacity", .9);
  //     div.html( d.skill + "<br />Level: " + d.level + "<br />" )
  //         .style("left", (d3.event.pageX) + "px")
  //         .style("top", (d3.event.pageY - 28) + "px");
  // };

  // function mouseout() {
  //     div.transition()
  //         .duration(500)
  //         .style("opacity", 0);
  // };

  // d3.selectAll("g")
  //     .on("mouseover", mouseover)
  //     .on("mouseout",  mouseout);

};


// ************************
// *****   barChart   *****
// ************************

var svgBarChart;

function buildSvgBarChart() {
  svgBarChart = d3.select('#barChart')
    .append("svg")
      .attr("width",width)
      .attr("height",height)
      .style("background-color","grey")
      .style("margin","10px")
      .style("border","1px solid black");
};

function drawBarChart(data) {

  var updateSelection = svgBarChart.selectAll("rect").data(data);
  var enterSelection = updateSelection.enter();
  var enterUpdateSelection = enterSelection.append("rect").attr('class','bar');
  var exitSelection = svgBarChart.selectAll('rect').data(data).exit();

  var div = d3.select("#barChart").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

  var barWidth = width/data.length;

  // updateSelection
  //     .attr("x", function (d, i) { return i * barWidth; })
  //     .attr("y", function (d, i) { return height - (d.unique_installs/100); })
  //     .attr("width", barWidth-1)
  //     .attr("height", function(d) { return d.unique_installs/100; })
  //     .style("fill", function(d, i) {
  //         switch (true) {
  //           case (d.unique_installs > 2000000):
  //             color = "red";
  //             break;
  //           case (d.unique_installs <= 2000000 && d.unique_installs > 100000):
  //             color = "#ff7070"; // light red
  //             break;
  //           case (d.unique_installs <= 100000 && d.unique_installs > 10000):
  //             color = "blue";
  //             break;
  //           case (d.unique_installs <= 10000 && d.unique_installs > 5000):
  //             color = "steelblue";
  //             break;
  //           case (d.unique_installs <= 5000 && d.unique_installs > 1000):
  //             color = "lightblue";
  //             break;
  //           case (d.unique_installs <= 1000 && d.unique_installs > 500):
  //             color = "orange";
  //             break;
  //           default:
  //            color = "#fc6"; // light orange
  //         }
  //       return color;
  //     })

  //     .on("mouseover", function(d) {
  //         div.transition()
  //             .duration(200)
  //             .style("opacity", .9);
  //         div.html( d.name + "<br />Rank: " + d.installs_rank + "<br />Installs: " + d.unique_installs)
  //             .style("left", (d3.event.pageX) + "px")
  //             .style("top", (d3.event.pageY - 28) + "px");
  //         })

  //     .on("mouseout", function(d) {
  //         div.transition()
  //             .duration(500)
  //             .style("opacity", 0);
  //         });

  // exitSelection.remove();

}
