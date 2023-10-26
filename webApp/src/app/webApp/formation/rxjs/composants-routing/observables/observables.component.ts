import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscription, first, from, tap } from 'rxjs';

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
        tap(
          (formation: string) => {
            //console.log(formation);

            const eltLi = <HTMLElement>document.createElement('li');
            eltLi.innerHTML = formation;
            eltLi.className = 'list-group-item';
            this.eltUl1.nativeElement.appendChild(eltLi);
          }
        )
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

  // cycle de vie
  ngOnDestroy () {
    // window.alert('COMP DESTROY');

    // désabonnement à notre observable
    this.subscription.unsubscribe;
  }
}
