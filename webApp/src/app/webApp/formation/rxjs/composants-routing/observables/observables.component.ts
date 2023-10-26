import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscription, delay, filter, first, from, tap } from 'rxjs';
import { Formation } from 'src/app/sharedModels/models/interfaces/formation';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent {
  // ----------------------------------------------------
  public title: string = '';
  public temps: number = 0;

  // utilse l'élément template 'formations1'
  @ViewChild('formations1') eltUl1!: ElementRef<HTMLElement>;
  @ViewChild('formations2') eltUl2!: ElementRef<HTMLElement>;
  @ViewChild('texte') eltPrenom!: ElementRef<HTMLElement>;
  @ViewChild('stop') eltStop!: ElementRef<HTMLElement>;

  // permet de gérer notre souscription à l'abonement de l'observable
  private subscription: Subscription = new Subscription();

  private subscriptionTime: Subscription = new Subscription();
  public infos$: Observable<string> = {} as Observable<string>;

  // ----------------------------------------------------
  public createObservable1: any = () => {
    this.eltUl1.nativeElement.innerHTML = '';

    const formationsArray: string[] = [
      'NG16',
      'REACT 17',
      'PWA',
      'XML',
      'JSON',
      'PWA',
      'TS',
    ];

    // création de l'observable
    const formation$: Observable<string> = from(formationsArray);

    console.log(formation$);

    // abonnement à l'observable
    // avec affection de l'abonnement et gérer sa souscription
    this.subscription = formation$
      .pipe(
        // permet d'enchainer les opérateurs
        first(),
        tap((formation: string) => {
          //console.log(formation);

          const eltLi = <HTMLElement>document.createElement('li');
          eltLi.innerHTML = formation;
          eltLi.className = 'list-group-item';
          this.eltUl1.nativeElement.appendChild(eltLi);
        })
      )
      .subscribe({
        // la notion d'observers NEXT ERROR COMPLETE
        // next:
        // (formation: string) => {
        //   console.log(formation);
        //   const eltLi = <HTMLElement>document.createElement('li');
        //   eltLi.innerHTML = formation;
        //   eltLi.className = 'list-group-item';
        //   this.eltUl1.nativeElement.appendChild(eltLi);
        // }
        // ,
        // error:
        // (e: any) => console.log(e)
        // ,
        // complete:
        // () => console.warn('Complete')
        // ,
      });
  };

  public createObservable2: any = () => {
    // tableau à 2 entrées
    const formationsArray2: Formation[] = [
      { cours: 'NG 16', duree: 4 },
      { cours: 'REACT 17', duree: 3 },
      { cours: 'VUE', duree: 2 },
      { cours: 'VUE', duree: 4 },
      { cours: 'ECMA SCRIPT', duree: 2 },
      { cours: 'TYPESCRIPT', duree: 2 },
    ];

    // création de l'observable sans le nommer
    from(formationsArray2)
      .pipe(
        // permet d'enchainer les opérateurs RXJS
        tap(
          // observer NEXT
          (formation: Formation) => console.log('Avant le filter : ', formation)
        ),
        // first(
        //   // predicat === pattern
        //   (formation: Formation) => {
        //     // ce first va arreter le listing des formations à la première formation qui aura une durée de 2 jours
        //     return formation.duree === 2;
        //   }
        // ),
        filter(
          (formation: Formation) => {
            return formation.duree === 2;
          }
        ),
        tap(
          (formation: Formation) => {
            console.warn('Apres le filter : ', formation);

            const eltLi = <HTMLElement>document.createElement('li');
            eltLi.innerHTML = `${formation.cours} : ${formation.duree} jours.`;
            eltLi.className = 'list-group-item';
            this.eltUl2.nativeElement.appendChild(eltLi);
          }
        )
      )
      .subscribe();
  };

  // cycle de vie
  ngOnDestroy() {
    // window.alert('COMP DESTROY');

    // désabonnement à notre observable
    this.subscription.unsubscribe;
  }
}
