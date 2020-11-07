import React, { useRef, useLayoutEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz"
import am4themes_frozen from"@amcharts/amcharts4/themes/frozen"
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_frozen);

function Co2Viz2(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    var chart = am4core.create("chartdiv7", am4charts.XYChart);

// Export
chart.exporting.menu = new am4core.ExportMenu();

// Data for both series
var data = [ {
  "year": "1",
  "income": 4.3,
  "expenses": 3.4
}, {
  "year": "2",
  "income": 3.2,
  "expenses":  3.4
}, {
  "year": "3",
  "income":3,
  "expenses": 3.4
}, {
  "year": "4",
  "income": 2.8,
  "expenses":  3.4
}, {
  "year": "5",
  "income": 3.2,
  "expenses":  3.4
  // "lineDash": "5,5",
}, {
  "year": "6",
  "income": 2.5,
  "expenses":  3.4,
  // "strokeWidth": 1,
  // "columnDash": "5,5",
  // "fillOpacity": 0.2,
  // "additional": "(projection)"
}, {
  "year": "7",
  "income": 3.3,
  "expenses":  3.4
  // "strokeWidth": 1,
  // "columnDash": "5,5",
  // "fillOpacity": 0.2,
  // "additional": "(projection)"
}, {
  "year": "8",
  "income": 2.8,
  "expenses":  3.4
  // "strokeWidth": 1,
  // "columnDash": "5,5",
  // "fillOpacity": 0.2,
  // "additional": "(projection)"
}, {
  "year": "9",
  "income":2.9,
  "expenses": 3.4
  // "strokeWidth": 1,
  // "columnDash": "5,5",
  // "fillOpacity": 0.2,
  // "additional": "(projection)"
}, {
  "year": "10",
  "income":4.5,
  "expenses":  3.4
  // "strokeWidth": 1,
  // "columnDash": "5,5",
  // "fillOpacity": 0.2,
  // "additional": "(projection)"
}, {
  "year": "11",
  "income": 4.8,
  "expenses":  3.4
  // "strokeWidth": 1,
  // "columnDash": "5,5",
  // "fillOpacity": 0.2,
  // "additional": "(projection)"
}, {
  "year": "12",
  "income":3.3,
  "expenses": 3.4
  // "strokeWidth": 1,
  // "columnDash": "5,5",
  // "fillOpacity": 0.2,
  // "additional": "(projection)"
}, {
  "year": "13",
  "income": 3.5,
  "expenses":3.4
  // "strokeWidth": 1,
  // "columnDash": "5,5",
  // "fillOpacity": 0.2,
  // "additional": "(projection)"
}];

/* Create axes */
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.minGridDistance = 30;

/* Create value axis */
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

/* Create series */
var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.name = "Income";
columnSeries.dataFields.valueY = "income";
columnSeries.dataFields.categoryX = "year";

columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]CO2 per meat in Factory{categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
columnSeries.columns.template.propertyFields.stroke = "stroke";
columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
columnSeries.tooltip.label.textAlign = "middle";

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.name = "Expenses";
lineSeries.dataFields.valueY = "expenses";
lineSeries.dataFields.categoryX = "year";

lineSeries.stroke = am4core.color("#fdd400");
lineSeries.strokeWidth = 3;
lineSeries.propertyFields.strokeDasharray = "lineDash";
lineSeries.tooltip.label.textAlign = "middle";

var bullet = lineSeries.bullets.push(new am4charts.Bullet());
bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
bullet.tooltipText = "[#fff font-size: 15px]World average:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
var circle = bullet.createChild(am4core.Circle);
circle.radius = 4;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 3;

chart.data = data;
    //....
    //chart.current = container;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="chartdiv7" style={{ width: "70%", height: "500px" }}></div>
  );
}
export default Co2Viz2;