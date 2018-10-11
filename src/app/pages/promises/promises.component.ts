import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
    
    this.countThreeSeconds();

  }

  countThreeSeconds(){

    return new Promise(
      (resolve)=>{

        let count = 0;
        let elementText = document.getElementById("text-promises");

        let interval = setInterval(()=>{

          count+=1;
          elementText.innerHTML += count+"<br>";
          
          if(count === 5){
            resolve();
            elementText.innerHTML += "La promesa termino";
            clearInterval(interval);
          }

        },1000);
      });

  }

}
