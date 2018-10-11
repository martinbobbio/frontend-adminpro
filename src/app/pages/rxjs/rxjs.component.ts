import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  elementText:HTMLElement;

  constructor() {

    this.subscription = this.returnObserver().subscribe(
      number=> this.elementText.innerHTML += number+" - ",
      error => console.error('Error en el observable', error),
      () => this.elementText.innerHTML += "<br><br> El observable ha finalizado!"
    );

  }

  ngOnInit() {
    this.elementText = document.getElementById("text-rxjs");
  }

  ngOnDestroy(){
    alert("Página cerrada");
    this.subscription.unsubscribe();

  }

  returnObserver():Observable<number>{
    return new Observable(observer =>{

      let count = 0;

      const interval = setInterval(()=>{

        count+=1;

        observer.next(count);

        if(count === 100){
          clearInterval(interval);
          observer.complete();
        }

      },100)
    });
  }

}
