import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-donut',
  templateUrl: './graphic-donut.component.html',
  styles: []
})
export class GraphicDonutComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels:string[] = [];
  @Input('chartData') doughnutChartData:number[] = [];
  @Input() title:string;

  constructor() { }

  ngOnInit() {
  }

}
