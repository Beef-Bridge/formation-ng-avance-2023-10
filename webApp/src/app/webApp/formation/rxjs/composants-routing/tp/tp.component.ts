import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, combineLatest, fromEvent, map, mergeMap, of, scan, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.scss']
})
export class TpComponent {

  // props
  @ViewChild('plus') eltPlus!: ElementRef<HTMLElement>;
  @ViewChild('moins') eltMoins!: ElementRef<HTMLElement>;
  @ViewChild('panier') eltPanier!: ElementRef<HTMLElement>;

  // TD
  ngOnInit() {
    console.clear();
    const Ob1$ = of(5);
    const Ob2$ = of(-2);

    // merge(
    //   Ob1$, Ob2$
    // ).subscribe(
    //   (val) => console.log(val)
    // );

    of(5)
      .pipe(
        mergeMap(
          (val) => {
            console.log(val);
            return  of(-2);
            }
        )
      )
      .subscribe(
        (val) => console.warn(val)
      );
  }

  //  TP
  // cycles de vie
  ngAfterViewInit() {
    // fontion qu renvoie un Observable
    // param1: la target (élément HTML)
    // param2: l'evt du DOM

    // ------------------------------------------
    // création de l'observable #1 : PLUS
    // ------------------------------------------
    const plus$ = fromEvent(this.eltPlus.nativeElement, 'click')
    .pipe(
      startWith(0),
      tap(
        (valObs) => console.log(`Valeur de l'observable : `, valObs)
      ),
      map(
        () => { return 1 }
      ),
      tap(
        (valObs) => console.log(`Valeur de l'observable après le map : `, valObs)
      ),
      scan(
        (accu: number, nelleValeur: number) => { return accu + nelleValeur }
      ),
      tap(
        (valObs) => {
          console.log(`Valeur de l'observable apres le scan : `, valObs);
          this.eltMoins.nativeElement.style.display = 'inline';
        }
      )
    )
    // .subscribe(
    //   (valObs) => this.eltPanier.nativeElement.innerHTML = `<strong>${valObs}</strong> article(s) en panier`
    // );

    // ------------------------------------------
    // création de l'observable #2 : MOINS
    // ------------------------------------------
    const moins$ = fromEvent(this.eltMoins.nativeElement, 'click')
    .pipe(
      startWith(0),
      map(
        () => { return 1 }
      ),
      scan(
        (accu: number, nelleValeur: number) => { return accu + nelleValeur }
      )
    )
    // .subscribe(
    //   (valObs) => this.eltPanier.nativeElement.innerHTML = `<strong>${valObs}</strong> article(s) en panier`
    // );

    // --------------------------------------------------------------
    // Re-Composition des 2 observables : Combinaison - Fusion(merge)
    // --------------------------------------------------------------
    combineLatest([plus$, moins$])
    .pipe(
      map(
        ([valObs1, valObs2]) => {
          return valObs1 - valObs2;
        }
      )
    )
    .subscribe(
      (valObs) => {
        this.eltPanier.nativeElement.innerHTML = `<strong>${valObs}</strong> article(s) en panier`;

        if (valObs === 0) {
          this.eltMoins.nativeElement.style.display = 'none';
        }
      }
    );
  }
}
