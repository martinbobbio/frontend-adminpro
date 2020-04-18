import { Pipe, PipeTransform } from '@angular/core';
import { environment } from "../../environments/environment";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, type:string = 'user'): any {

    let url = `${environment.backend}/img`;

    if(!img){
      return `${url}/user/no-image`;
    }

    if(img.indexOf('https') >= 0){
      return img;
    }

    switch(type){
      case 'user': return `${url}/user/${img}`;
      case 'hospital': return `${url}/hospital/${img}`;
      case 'doctor': return `${url}/doctor/${img}`;
      default: return `${url}/user/no-image`;
    }
  }

}
