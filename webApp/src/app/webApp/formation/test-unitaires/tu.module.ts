import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuComponent } from './composants/tu/tu.component';
import { ListeDesAvisComponent } from './composants/liste-des-avis/liste-des-avis.component';
import { Exo1Component } from './composants/child-component1/exo1.component';
import { AvisComponent } from './composants/detail-avis/avis.component';



@NgModule({
  declarations: [
    TuComponent, ListeDesAvisComponent, AvisComponent, Exo1Component
    // nos pipes - directives
  ],
  imports: [ CommonModule ]
})
export class TuModule { }
