import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscription, from } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
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

  private subscription: Subscription = new Subscription();
  private subscriptionTime: Subscription = new Subscription();
  public infos$: Observable<string> = {} as Observable<string>;

  // ----------------------------------------------------
  public createObservable1: any = () => {
    this.eltUl1.nativeElement.innerHTML = '';

    const formationsArray: string[] = ['NG16', 'REACT 17', 'PWA', 'XML', 'JSON', 'PWA', 'TS'];

    // création de l'observable
    const formation$:Observable<string> = from(formationsArray);

    console.log(formation$);

    formation$
      .pipe(
        // permet d'enchainer les opérateurs
      )
      .subscribe({
        // la notion d'observers NEXT ERROR COMPLETE
        next:
        (formation:string) => {
          console.log(formation);
        },
        error:
        (e:any) => console.log(e)
        ,
        complete:
        () => console.warn('Complete')
      })
  }
}
