// ********************************
// *****   D3 Visualization   *****
// ********************************

var svg;
var width = 340;
var height = 340;
var data = [];

// ****************************
// *****   Bubble Chart   *****
// ****************************

var svgBubbleChart;

function buildSvgBubbleChart() {
  svgBubbleChart = d3.select("#bubble-chart")
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

  var div = d3.select("#bubble-chart").append("div")
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

  enterUpdateSelection
    .append("text");

  updateSelection.select("circle")
    .style("stroke","black")
    .style("fill", function(d, i) {
      switch (true) {
        case (d.level > 9):
          color = "#000080"; // navy blue
          break;
        case (d.level > 8):
          color = "#0000CD"; // medium blue
          break;
        case (d.level > 7):
          color = "#0000FF"; // blue
          break;
        case (d.level > 6):
          color = "#4169E1"; // royal blue
          break;
        case (d.level > 5):
          color = "#6495ED"; // corn flower blue
          break;
        case (d.level > 4):
          color = "#00BFFF"; // deep sky blue
          break;
        case (d.level > 3):
          color = "#87CEEB"; // sky blue
          break;
        case (d.level > 2):
          color = "#ADD8E6"; // light blue
          break;
        case (d.level > 1):
          color = "#F0F8FF"; // alice blue
          break;
        default:
          color = "green";
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

  updateSelection.select("text")
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
      .attr("dx", function(d) { return d.x-25; })
      .attr("dy", function(d) { return d.y; });
  });

  function collide(node) {

    var r = radius + (radius+1),
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


// *************************
// *****   Pie Chart   *****
// *************************

var svgPieChart;

function buildSvgPieChart() {
  svgPieChart = d3.select('#pie-chart')
    .append("svg")
      .attr("width",width)
      .attr("height",height)
      .style("background-color","grey")
      .style("margin","10px")
      .style("border","1px solid black");
};

function drawPieChart(data) {
  var div = d3.select("#pie-chart").append("div")
    .attr("class", "tooltip")
      .style("opacity", 0);

  var arc = d3.svg.arc()
    .innerRadius(0)
    .outerRadius((width / 2)-20);

  var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.level; });

  var chart = svgPieChart.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var arcGs = chart.selectAll(".arc")
    .data(pie(data))
      .enter().append("g")
      .style("fill", function(d, i) {
        switch (true) {
          case (d.data.level > 9):
            color = "#000080"; // navy blue
            break;
          case (d.data.level > 8):
            color = "#0000CD"; // medium blue
            break;
          case (d.data.level > 7):
            color = "#0000FF"; // blue
            break;
          case (d.data.level > 6):
            color = "#4169E1"; // royal blue
            break;
          case (d.data.level > 5):
            color = "#6495ED"; // corn flower blue
            break;
          case (d.data.level > 4):
            color = "#00BFFF"; // deep sky blue
            break;
          case (d.data.level > 3):
            color = "#87CEEB"; // sky blue
            break;
          case (d.data.level > 2):
            color = "#ADD8E6"; // light blue
            break;
          case (d.data.level > 1):
            color = "#F0F8FF"; // alice blue
            break;
          default:
            color = "white";
        }
        return color;
      });

  arcGs.append("path")
    .attr("d", arc)
    .style("stroke", "black")
    .style("stroke-width", 1);

  function mouseover(d) {
    div.transition()
      .duration(200)
      .style("opacity", .9);
    div.html( d.data.skill + "<br />Level: " + d.data.level + "<br />" )
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
  };

  function mouseout() {
    div.transition()
      .duration(500)
      .style("opacity", 0);
  };

  d3.selectAll("g")
    .on("mouseover", mouseover)
    .on("mouseout",  mouseout);
};


// *************************
// *****   Bar Chart   *****
// *************************

var svgBarChart;

function buildSvgBarChart() {
  svgBarChart = d3.select('#bar-chart')
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

  var div = d3.select("#bar-chart").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var barWidth = width/data.length;

  updateSelection
    .attr("x", function (d, i) { return i * barWidth; })
    .attr("y", function (d, i) { return height - (d.level*50); })
    .attr("width", barWidth-1)
    .attr("height", function(d) { return d.level*50; })
    .style("fill", function(d, i) {
      switch (true) {
        case (d.level > 9):
          color = "#000080"; // navy blue
          break;
        case (d.level > 8):
          color = "#0000CD"; // medium blue
          break;
        case (d.level > 7):
          color = "#0000FF"; // blue
          break;
        case (d.level > 6):
          color = "#4169E1"; // royal blue
          break;
        case (d.level > 5):
          color = "#6495ED"; // corn flower blue
          break;
        case (d.level > 4):
          color = "#00BFFF"; // deep sky blue
          break;
        case (d.level > 3):
          color = "#87CEEB"; // sky blue
          break;
        case (d.level > 2):
          color = "#ADD8E6"; // light blue
          break;
        case (d.level > 1):
          color = "#F0F8FF"; // alice blue
          break;
        default:
         color = "white";
      }
      return color;
    })

    .on("mouseover", function(d) {
      div.transition()
          .duration(200)
          .style("opacity", .9);
      div.html( d.skill + "<br />Level: " + d.level)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
    })

    .on("mouseout", function(d) {
      div.transition()
        .duration(500)
        .style("opacity", 0);
    });

  exitSelection.remove();

}