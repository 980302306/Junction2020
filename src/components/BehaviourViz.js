import React, { useLayoutEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz"
import am4themes_frozen from"@amcharts/amcharts4/themes/frozen"
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

function BehaviourViz(props) {
  // const chart = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv6", am4charts.SlicedChart);
chart.data = [{
  "name": "Happy mood😊",
  "value": 1000
}, {
  "name": "Relax mood😗",
  "value": 300
}, {
  "name": "Fear mood",
  "value": 200
}, {
  "name": "Frustrated mood ",
  "value": 180
}, {
  "name": "Harmful mood",
  "value": 50
}];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;
series.orientation = "vertical";
series.maskSprite.path = "M512 64c282.77 0 512 186.25 512 416 0 229.752-229.23 416-512 416-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z";
// chart.tooltip.label.fill = am4core.color("#f00");

    //....
    //chart.current = container;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="chartdiv6" style={{ width: "70%", height: "450px" }}></div>
  );
}
export default BehaviourViz;