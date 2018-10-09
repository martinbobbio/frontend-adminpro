import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styles: []
})
export class IncrementorComponent implements OnInit {

  @ViewChild('txtPercent') txtPercent: ElementRef;

  @Input() percent:number = 50;
  @Input() leyend:string = 'Leyenda';

  @Output() percentValue:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeValue(value){

    if(this.percent >= 100 && value > 0){
      this.percent = 100;
      return;
    }

    if(this.percent <= 0 && value < 0){
      this.percent = 0;
      return;
    }

    this.percent += value;
    this.percentValue.emit(this.percent);
    this.txtPercent.nativeElement.focus();
  }

  changeNgModel(value){

    if(value >= 100)
      this.percent = 100;
    else if(value <= 0)
      this.percent = 0;
    else
      this.percent = value;

    this.txtPercent.nativeElement.value = Number(this.percent)
    this.percentValue.emit(this.percent);

  }

}
