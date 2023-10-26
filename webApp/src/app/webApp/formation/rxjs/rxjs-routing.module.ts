import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './composants-routing/observables/observables.component';
import { ObservablesSuiteComponent } from './composants-routing/observables-suite/observables-suite.component';
import { AjaxComponent } from './composants-routing/ajax/ajax.component';
import { TpComponent } from './composants-routing/tp/tp.component';

const routes: Routes = [
  { path: 'les-observables', component: ObservablesComponent },
  { path: 'les-observables-suite', component: ObservablesSuiteComponent },
  { path: 'ajax', component: AjaxComponent },
  { path: 'tp', component: TpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
