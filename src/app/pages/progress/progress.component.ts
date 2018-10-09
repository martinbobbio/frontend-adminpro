import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percent1:number = 20;
  percent2:number = 60;

  constructor() { }

  ngOnInit() {
  }

}
