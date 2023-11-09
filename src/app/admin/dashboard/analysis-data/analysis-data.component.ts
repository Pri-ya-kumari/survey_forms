import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartserviceService } from 'src/app/adminservice/chartservice.service';

@Component({
  selector: 'app-analysis-data',
  templateUrl: './analysis-data.component.html',
  styleUrls: ['./analysis-data.component.css']
})
export class AnalysisDataComponent {


  data: any[] = [];
  option: any;
  options: any[] = [];

  constructor(private dataService: ChartserviceService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data1: any) => {
      this.data = data1;
      this.createChart();
    });
    this.dataService.getangular().subscribe((responses: any) => {
      this.options = responses;
      this.chartangular();
    });
  }

  chartangular() {

    let yesc =1;
    let noc = 1;
    this.options.forEach((response) => {
      if (response.op1 === 'yes') {
        yesc++;
      } else if (response.op1 === 'no') {
        noc++;
      }
    });
    const ctx1 = document.getElementById('myChart2') as HTMLCanvasElement;
    new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          data: [yesc, noc],
          backgroundColor: ['green', 'red']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createChart() {
    const chartData = {
      //labels: ['contact from'],
      datasets: [
        {
          label: 'contactform',
          data: this.data.map((item) => item.usercounts),
          backgroundColor: ['rgba(75, 192, 192, 1)'],
          borderWidth:1
        },

      ],
    };
    const chartData1 = {
      //labels: ['event from'],
      datasets: [
        {
          label: 'eventform',
          data: this.data.map((item1) => item1.count),
          backgroundColor: 'lightgreen',
          borderWidth: 1
        }
      ],
    };

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    
    const myChart = new Chart(ctx, {
      //doughnut
      type: 'doughnut',
      data: chartData,
      options: {
        rotation: -90,
        circumference: 180,
        responsive: true,
      },

    });
    const ctx1 = document.getElementById('myChart1') as HTMLCanvasElement;
    const myChart1 = new Chart(ctx1, {
      //doughnut
      type: 'doughnut',
      data: chartData1,
      options: {
        rotation: 90,
        circumference: 180,
      }
    });
  }
}