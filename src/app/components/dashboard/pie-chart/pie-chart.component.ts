import {
  Component,
  Input,
  SimpleChanges,
  NgZone,
  OnChanges,
} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
})
export class PieChartComponent implements OnChanges {
  @Input() months: any;

  month = [
    { country: 'Lithuania', litres: 501.9 },
    { country: 'Czech Republic', litres: 301.9 },
    { country: 'Ireland', litres: 201.1 },
    { country: 'Lithua', litres: 501.9 },
    { country: 'Czech ', litres: 301.9 },
    { country: 'Ireland', litres: 201.1 },
  ];
  private chart: am4charts.PieChart | undefined;

  constructor(private zone: NgZone) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['months'].currentValue !== changes['months'].previousValue) {
      this.zone.runOutsideAngular(() => {
        if (this.chart) {
          // Si el gráfico ya existe, destrúyelo antes de crear uno nuevo
          this.chart.dispose();
        }
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create('chartdiv', am4charts.PieChart);
        chart.data = this.month;

        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = 'litres';
        pieSeries.dataFields.category = 'country';
        // Deshabilita las etiquetas
        pieSeries.labels.template.disabled = true;

        chart.innerRadius = am4core.percent(40);

        // Agrega una leyenda
        chart.legend = new am4charts.Legend();
        chart.legend.position = 'right'; // Posiciona la leyenda a la derecha del gráfico
        chart.legend.scrollable = true; // Habilita el desplazamiento
        chart.legend.maxHeight = 150; // Establece la altura máxima de la leyenda
        chart.legend.marginLeft = 50;

        this.chart = chart;
      });
    }
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
