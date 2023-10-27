import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartserviceService } from 'src/app/adminservice/chartservice.service';

@Component({
  selector: 'app-analysis-data',
  templateUrl: './analysis-data.component.html',
  styleUrls: ['./analysis-data.component.css']
})
export class AnalysisDataComponent {


  data: any[] = [];

  constructor(private dataService: ChartserviceService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data1:any) => {
      this.data = data1;
      this.createChart();
    });
  }

  createChart() {
    const chartData = {
      labels: this.data.map((item) => item.formname),
      datasets: [
        {
          label: 'Sample Chart',
          data: this.data.map((item) => item.id),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    };
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {

          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
