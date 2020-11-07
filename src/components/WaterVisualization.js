import React, { useLayoutEffect } from 'react';
// import logo from './logo.svg';
//import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz"

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

function WaterVisualization(props) {
  // const chart1 = useRef(null);

  useLayoutEffect(() => {
    var chart1 = am4core.create("chartdiv1", am4charts.XYChart);

// Add data
chart1.data = [ {
    "name": "Monthly water per beef(L)",
    "points": 122.28,
    "color": "#1f65a2",
    "bullet": "https://i.ibb.co/JFFzzt9/cowicon.png"
}, {
    "name": " Monthly water per broiler(L)",
    "points": 10.5595,
    "color": "#3c54c3",
    "bullet": "https://i.ibb.co/zZdL6kP/chicken.png"
}, {
    "name": " Monthly water per pork(L)",
    "points": 58.19,
    "color": "#5e74da",
    "bullet": "https://i.ibb.co/Nm19HgR/pigicon.png"
}];

// Create axes
var categoryAxis = chart1.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.inside = true;
categoryAxis.renderer.labels.template.fill = am4core.color("#000");
categoryAxis.renderer.labels.template.fontSize = 15;

var valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeDasharray = "4,4";
valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;

// Do not crop bullets
chart1.maskBullets = false;

// Remove padding
chart1.paddingBottom = 0;

// Create series
var series = chart1.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "points";
series.dataFields.categoryX = "name";
series.columns.template.propertyFields.fill = "color";
series.columns.template.propertyFields.stroke = "color";
series.columns.template.column.cornerRadiusTopLeft = 15;
series.columns.template.column.cornerRadiusTopRight = 15;
series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";

// Add bullets
var bullet = series.bullets.push(new am4charts.Bullet());
var image = bullet.createChild(am4core.Image);
image.horizontalCenter = "middle";
image.verticalCenter = "bottom";
image.dy = 20;
image.y = am4core.percent(100);
image.propertyFields.href = "bullet";
image.tooltipText = series.columns.template.tooltipText;
image.propertyFields.fill = "color";
image.filters.push(new am4core.DropShadowFilter());


    //....
    //chart.current = container;

    return () => {
      chart1.dispose();
    };
  }, []);

  return (
    <div id="chartdiv1" style={{ width: "45%", height: "400px" }}></div>
  );
}
export default WaterVisualization;