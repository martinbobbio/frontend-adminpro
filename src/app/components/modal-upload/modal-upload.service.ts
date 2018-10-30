import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {

  public type: string;
  public id: string;
  public hidden:boolean = false;
  public notification = new EventEmitter<any>();

  constructor() { }

  hideModal(){
    this.hidden = false;
    this.type = null;
    this.id = null;
  }

  showModal(type:string,id:string){
    this.hidden = true;
    this.id = id;
    this.type = type;
  }

}
