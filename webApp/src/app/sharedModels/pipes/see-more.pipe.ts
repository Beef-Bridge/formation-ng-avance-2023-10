import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {
  transform(datas:string, nbCar:number, texte:string) {
    return `${datas.substring(0,nbCar)} ${texte}`;
  }
}