import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/sharedModels/models/class/films';
import { FilmsService } from 'src/app/sharedModels/services/films.service';
import { FirestoreService } from 'src/app/sharedModels/services/firestore.service';

@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.scss']
})
export class ListeDesFilmsComponent implements OnInit {

  // 1-props   
  public films: Films[]=[];
  public panier: Films[]=[];
  public commandesFilms: any[]=[];

  // 2-constructeur
  constructor(
    private _filmService: FilmsService,
    private _firestoreService: FirestoreService
    ) {  }

  // 3-LifeCycle
  ngOnInit(): void {
    // chargement des datas
    console.log('---ngOnInit');
    this._filmService.getFilms$()    
    .subscribe(
      (datas: Films[]) => {
        console.table(datas);
        this.films = datas;
      });

      this.checkGetCommandes();
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
  // ******************************************
  public validerPanier = () => {
    console.clear();
    console.log('Panier :', this.panier);
    console.log('Panier Spread operators ES2015 :', ...this.panier);

    let datas = { ...this.panier };
    
    this._firestoreService.addFirestore(datas);
    // ----
    this.panier = [];
    this.checkGetCommandes();
  }
  // ------------------------------------------
  public checkGetCommandes = () => {
    this._firestoreService.getCommandes()
      .then(
        (datas: any[]) => {
          console.log('getCommandes : ', datas);
          this.commandesFilms = datas;
        })
  }
  // ------------------------------------------
  public supprCommande = (commande: any) => {
    this._firestoreService.deleteCommande(commande)
      .then(
        () => {
          // clear du commandes
          // this.checkGetCommandes();
          console.clear();
          console.table(this.commandesFilms);
          let keyCommande = this.commandesFilms.indexOf(commande);
          console.log(keyCommande);

          if (keyCommande >= 0) {
            this.commandesFilms.splice(keyCommande, 1);
            console.table(this.commandesFilms);
          }
        });
      }
}