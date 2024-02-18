import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_timeline from '@amcharts/amcharts4/plugins/timeline';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-dashboard-num-card-chart',
  templateUrl: './dashboard-num-card-chart.component.html',
})
export class DashboardNumCardChartComponent {
  @Input() view: [number, number] = [700, 500];
  @Input() sales = [
    {
      name: 'producto 1',
      value: 10,
    },
    {
      name: 'producto 7',
      value: 1,
    },
    {
      name: 'producto 6',
      value: 4,
    },
    {
      name: 'producto 2',
      value: 11,
    },
    {
      name: 'producto 5',
      value: 3,
    },
    {
      name: 'producto 4',
      value: 7,
    },
    {
      name: 'producto 3',
      value: 6,
    },
  ];


  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create('chartdivProduct', am4charts.TreeMap);

    chart.data = this.sales;
    chart.colors.step = 2;
    chart.dataFields.value = 'value';
    chart.dataFields.name = 'name';

    chart.navigationBar = new am4charts.NavigationBar();
    chart.homeText = "Ventas de hoy";
    chart.legend = new am4charts.Legend();

    let level1 = chart.seriesTemplates.create('0');
    let level1_column = level1.columns.template;
    level1_column.column.cornerRadius(10, 10, 10, 10);
    level1_column.fillOpacity = 0.8;
    level1_column.stroke = am4core.color('#fff');
    level1_column.strokeWidth = 5;
    level1_column.strokeOpacity = 1;

    let level1_bullet = level1.bullets.push(new am4charts.LabelBullet());
    level1_bullet.locationY = 0.5;
    level1_bullet.locationX = 0.5;
    level1_bullet.label.text = 'cantidad: {value}';
    level1_bullet.label.fill = am4core.color('#fff');
  }
}
