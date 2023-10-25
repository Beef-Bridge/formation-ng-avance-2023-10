import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/sharedModels/models/class/films';
import { FilmsService } from 'src/app/sharedModels/services/films.service';

@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.scss']
})
export class ListeDesFilmsComponent implements OnInit {

  // 1-props   
  public films: Films[]=[];
  public panier: Films[]=[];

  // 2-constructeur
  constructor(private _filmService: FilmsService) {  }

  // 3-LifeCycle
  ngOnInit(): void {
    // chargement des datas
    console.log('---ngOnInit');
    this._filmService.getFilms$()    
    .subscribe(
      (datas: Films[]) => {
        console.table(datas);
        this.films = datas;
      })
  }

  // 4-Méthodes
  public filmSelected = (e: any) => {
    console.clear();   console.log('Parent TS : ', e.paramIsChecked ,e.paramFilm.name);

    if (e.paramIsChecked) {
      this.panier.push(e.paramFilm);
      console.table(this.panier);
    } else {
      let keyPanier = this.panier.indexOf(e.paramFilm);
      if (keyPanier >= 0) {
        this.panier.splice(keyPanier, 1);
        console.table(this.panier);
      }
    }
  }
}