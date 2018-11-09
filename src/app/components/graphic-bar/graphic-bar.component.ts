import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styles: []
})
export class GraphicBarComponent implements OnInit {

  @Input('chartLabels') barChartLabels:string[] = [];
  @Input('chartData') barChartData:number[] = [];
  @Input() title:string;

  constructor() { }

  ngOnInit() {
  }

}
