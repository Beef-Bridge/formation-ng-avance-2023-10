import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './composants/rxjs/rxjs.component';
import { AjaxComponent } from './composants-routing/ajax/ajax.component';
import { ObservablesComponent } from './composants-routing/observables/observables.component';
import { ObservablesSuiteComponent } from './composants-routing/observables-suite/observables-suite.component';
import { TpComponent } from './composants-routing/tp/tp.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RxjsComponent,
    AjaxComponent,
    ObservablesComponent,
    ObservablesSuiteComponent,
    TpComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    HttpClientModule,
    // RouterModule // Plus utile car il est déjà importé dans le accueil.module.ts !
  ]
})
export class RxjsModule { }
