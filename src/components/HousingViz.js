import React, {useLayoutEffect } from 'react';
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

function HousingViz(props) {
  // const chart = useRef(null);

  useLayoutEffect(() => {
    var chart = am4core.create("chartdiv4", am4charts.RadarChart);
    chart.data = [{
        "country": "Humidity",
        "litres": 401
      }, {
        "country": "Temperature",
        "litres": 301
      }, {
        "country": "Resttime",
        "litres": 266
      }, {
        "country": "Average square meter ",
        "litres": 370
      }, {
        "country": "Sunshine time",
        "litres": 366
      }];
      
      /* Create axes */
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
      valueAxis.renderer.axisFills.template.fillOpacity = 0.05;
      
      /* Create and configure series */
      var series = chart.series.push(new am4charts.RadarSeries());
      series.dataFields.valueY = "litres";
      series.dataFields.categoryX = "country";
      series.name = "Sales";
      series.strokeWidth = 3;

    //....
    //chart.current = container;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="chartdiv4" style={{ width: "70%", height: "450px" }}></div>
  );
}
export default HousingViz;