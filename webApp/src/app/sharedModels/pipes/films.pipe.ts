import { Pipe, PipeTransform } from '@angular/core';
import { Films } from 'src/app/sharedModels/models/class/films';

@Pipe({
  name: 'pipeFilter'
})
export class FilmsPipe implements PipeTransform {

  // la méthode transform admet 2 paramètres
  // le 1er : la data à transformer
  // le second: le motif de transformation 

  // une date(data) | (nomduPipe) date:'dd/MM/y' (motif)
  // myDate | date:'dd/MM/y HH:mm:ss'

  transform(datas: Films[], motif: string): Films[] {

    if (motif !== '') {
      // on a saisi des caractères
      let rst = datas.filter(

        (data: Films) => data.title.toLocaleLowerCase().includes(motif.toLocaleLowerCase())
          || data.desc.toLocaleLowerCase().includes(motif.toLocaleLowerCase())

      )
      return rst;
    } else {
      return datas;
    }
  }
}