import React, {  useLayoutEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz"

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

function FeedingViz(props) {
  // const chart = useRef(null);

  useLayoutEffect(() => {
    var chart = am4core.create("chartdiv3", am4charts.XYChart);

chart.data = [{
  "month": "0",
  "water": 0.18,
  "require_water": 0.17,
  "food": 2,
  "require_food": 2
}, {
  "month": "1",
  "water": 0.25,
  "require_water": 0.22,
  "food": 2.5,
  "require_food": 2.1
}, {
  "month": "2",
  "water": 0.37,
  "require_water": 0.30,
  "food": 2.8,
  "require_food": 2.2
}, {
  "month": "3",
  "water": 0.46,
  "require_water": 0.41,
  "food": 3.2,
  "require_food": 2
}, {
  "month": "4",
  "water": 0.59,
  "require_water": 0.55,
  "food": 3.4,
  "require_food": 3
}, {
  "month": "5",
  "water": 0.8,
  "require_water": 0.75,
  "food": 3.8,
  "require_food": 3.2
}, {
  "month": "6",
  "water": 1.2,
  "require_water": 1.1,
  "food": 4.2,
  "require_food": 3.2
}, {
  "month": "7",
  "water": 1.4,
  "require_water": 1.3,
  "food": 4.55,
  "require_food": 4.2
}, {
  "month": "8",
  "water": 1.43,
  "require_water": 1.4,
  "food": 4.8,
  "require_food": 4.2
}, {
  "month": "9",
  "water": 1.52,
  "require_water": 1.5,
  "food": 5.1,
  "require_food": 4.2
}, {
  "month": "10",
  "water": 1.58,
  "require_water": 1.55,
  "food": 5.3,
  "require_food": 5.2
}, {
  "month": "11",
  "water": 1.78,
  "require_water": 1.7,
  "food": 5.5,
  "require_food": 5.2
}, {
  "month": "12",
  "water": 1.90,
  "require_water": 1.9,
  "food": 6.8,
  "require_food": 6.2
}, {
  "month": "13",
  "water": 1.82,
  "require_water": 1.8,
  "food": 7.5,
  "require_food": 7.2
}, {
  "month": "14",
  "water": 1.81,
  "require_water": 1.75,
  "food": 8.8,
  "require_food": 8.2

}, {
  "month": "15",
  "water": 1.83,
  "require_water": 1.8,
  "food": 8.2,
  "require_food": 8.2
}, {
  "month": "16",
  "water": 1.76,
  "require_water": 1.75,
  "food": 9.7,
  "require_food": 9.2
}, {
  "month": "17",
  "water": 1.72,
  "require_water": 1.7,
  "food": 11.7,
  "require_food": 11.2
}
, {
  "month": "18",
  "water": 1.80,
  "require_water": 1.80,
  "food": 13.1,
  "require_food": 12.2
}
, {
  "month": "19",
  "water": 1.6,
  "require_water": 1.6,
  "food": 12.1,
  "require_food": 12
}
, {
  "month": "20",
  "water": 1.42,
  "require_water": 1.4,
  "food": 12.2,
  "require_food": 12
}, {
  "month": "21",
  "water": 1.45,
  "require_water": 1.4,
  "food": 12.5,
  "require_food": 12
}, {
  "month": "22",
  "water": 1.40,
  "require_water": 1.4,
  "food": 11.8,
  "require_food": 12
}, {
  "month": "23",
  "water": 1.5,
  "require_water": 1.4,
  "food": 11.5,
  "require_food": 11
}

];

chart.dateFormatter.inputDateFormat = "MM-dd";
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 60;
dateAxis.startLocation = 0.5;
dateAxis.endLocation = 0.5;
dateAxis.baseInterval = {
  timeUnit: "month",
  count: 1
}

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;

var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.dateX = "month";
series.name = "require_water";
series.dataFields.valueY = "require_water";
series.tooltipHTML = "<img src='https://i.ibb.co/k0K3bxy/image.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
series.tooltipText = "[#fff]{valueY.value}[/]";
series.tooltip.background.fill = am4core.color("#FFF");
series.tooltip.getStrokeFromObject = true;
series.tooltip.background.strokeWidth = 3;
series.tooltip.getFillFromObject = false;
series.fillOpacity = 0.6;
series.strokeWidth = 2;
series.stacked = true;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.name = "water";
series2.dataFields.dateX = "month";
series2.dataFields.valueY = "water";
series2.tooltipHTML = "<img src='https://i.ibb.co/9p47xtS/image.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
series2.tooltipText = "[#fff]{valueY.value}[/]";
series2.tooltip.background.fill = am4core.color("#FFF");
series2.tooltip.getFillFromObject = false;
series2.tooltip.getStrokeFromObject = true;
series2.tooltip.background.strokeWidth = 3;
series2.sequencedInterpolation = true;
series2.fillOpacity = 0.6;
series2.stacked = true;
series2.strokeWidth = 2;

var series3 = chart.series.push(new am4charts.LineSeries());
series3.name = "require_food";
series3.dataFields.dateX = "month";
series3.dataFields.valueY = "require_food";
series3.tooltipHTML = "<img src='https://i.ibb.co/k0K3bxy/image.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
series3.tooltipText = "[#fff]{valueY.value}[/]";
series3.tooltip.background.fill = am4core.color("#FFF");
series3.tooltip.getFillFromObject = false;
series3.tooltip.getStrokeFromObject = true;
series3.tooltip.background.strokeWidth = 3;
series3.sequencedInterpolation = true;
series3.fillOpacity = 0.6;
series3.defaultState.transitionDuration = 1000;
series3.stacked = true;
series3.strokeWidth = 2;

var series4 = chart.series.push(new am4charts.LineSeries());
series4.name = "food";
series4.dataFields.dateX = "month";
series4.dataFields.valueY = "food";
series4.tooltipHTML = "<img src='https://i.ibb.co/x2ngPnF/70.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
series4.tooltipText = "[#fff]{valueY.value}[/]";
series4.tooltip.background.fill = am4core.color("#FFF");
series4.tooltip.getFillFromObject = false;
series4.tooltip.getStrokeFromObject = true;
series4.tooltip.background.strokeWidth = 3;
series4.sequencedInterpolation = true;
series4.fillOpacity = 0.6;
series4.defaultState.transitionDuration = 1000;
series4.stacked = true;
series4.strokeWidth = 2;


chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;
chart.scrollbarX = new am4core.Scrollbar();

// Add a legend
chart.legend = new am4charts.Legend();
chart.legend.position = "top";

// axis ranges
var range = dateAxis.axisRanges.create();
range.date = new Date(2001, 0, 1);
range.endDate = new Date(2003, 0, 1);
range.axisFill.fill = chart.colors.getIndex(5);
range.axisFill.fillOpacity = 0.2;

range.label.text = "Fines for speeding increased";
range.label.inside = true;
range.label.rotation = 90;
range.label.horizontalCenter = "right";
range.label.verticalCenter = "bottom";

var range2 = dateAxis.axisRanges.create();
range2.date = new Date(2007, 1);
range2.grid.stroke = chart.colors.getIndex(6);
range2.grid.strokeOpacity = 0.6;
range2.grid.strokeDasharray = "5,2";


range2.label.text = "Motorcycle fee introduced";
range2.label.inside = true;
range2.label.rotation = 90;
range2.label.horizontalCenter = "right";
range2.label.verticalCenter = "bottom";

    //....
    //chart.current = container;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="chartdiv3" style={{ width: "70%", height: "450px" }}></div>
  );
}
export default FeedingViz;