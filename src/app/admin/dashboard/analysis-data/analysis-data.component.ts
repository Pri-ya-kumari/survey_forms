import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartserviceService } from 'src/app/adminservice/chartservice.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-analysis-data',
  templateUrl: './analysis-data.component.html',
  styleUrls: ['./analysis-data.component.css']
})
export class AnalysisDataComponent {


  data: any[] = [];
  option:any;
  public chartPlugins = [pluginDataLabels];
  constructor(private dataService: ChartserviceService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data1:any) => {
      this.data = data1;
      this.createChart();
    });
  }
  
  createChart() {
    const chartData = {
      //labels: this.data.map((item) => item.names),
      labels:['contact form','event form','percentage'],
      datasets: [
        {
          label: 'contactform',
          data: this.data.map((item) => item.usercounts),
          //data:[50],
          backgroundColor: ['rgba(75, 192, 192, 0.2)'],
          borderWidth: 1
        },
        {
          label: 'eventform',
          data: this.data.map((item1) => item1.count),
          //data:[50],
          backgroundColor:'lightgreen',
          borderWidth: 2
        }
      ],
    };
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      //doughnut
      type: 'doughnut',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        }
      }
    });
  }
}





/*responsive: true,
      maintainAspectRatio: true,
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: ['green', 'white', 'red'],
          precision: 2
        }
      },
    } */