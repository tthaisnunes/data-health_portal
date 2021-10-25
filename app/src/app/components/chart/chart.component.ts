import { Component, Input, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartsComponent {
  @Input() viewType: string;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: ChartOptions;
  public chartOptionsClinic: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Consultas",
          data: [31, 40, 28, 51, 42, 109, 100, 80, 67] //78, 28, 92
        },
        {
          name: "Retorno",
          data: [11, 32, 45, 32, 34, 52, 41, 60, 93] //30, 20, 87
        }
      ],
      chart: {
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      }
    };

    this.chartOptionsClinic = {
      series: [
        {
          name: "Exames realizados",
          data: [31, 40, 28, 51, 42, 109, 100, 80, 67] //78, 28, 92
        },
        {
          name: "Exames encaminhados",
          data: [11, 32, 45, 32, 34, 52, 41, 60, 93] //30, 20, 87
        }
      ],
      chart: {
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      }
    };
  }

}
