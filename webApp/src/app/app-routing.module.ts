import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './sharedModels/composants/page404.component';
import { BodyComponent } from './webApp/root/accueil/body/body.component';
import { ListeDesFilmsComponent } from './webApp/root/films/composants/films/liste-des-films.component';
import { TpComponent } from './webApp/formation/tp/composants/tp/tp.component';
import { FirebaseComponent } from './webApp/formation/firestore-firebase/composants/firebase/firebase.component';
import { FormulairesComponent } from './webApp/formation/formulaires/composants/formulaires/formulaires.component';
import { CompStore1Component } from './webApp/formation/ngrx-store/composants/comp-store1/comp-store1.component';
import { TuComponent } from './webApp/formation/test-unitaires/composants/tu/tu.component';
import { ClientLandingPageComponent } from './webApp/formation/compte-client/composants/client-landing-page/client-landing-page.component';
// import { ClientLandingPageComponent } from './webApp/formation/compte-client/composants/client-landing-page/client-landing-page.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'accueil', component: BodyComponent },
  { path: 'liste-des-films', component: ListeDesFilmsComponent },
  { path: 'liste-des-tps-et-des-exos', component: TpComponent },
  { path: 'firebase', component: FirebaseComponent},
  { path: 'reactives-forms', component: FormulairesComponent},
  { path: 'ngrx', component: CompStore1Component},
  { path: 'tests-unitaires', component: TuComponent},

  // facon classique
  // { path: 'lazy-loading', component: ClientLandingPageComponent, },

  // import routing en mode layz-loading
  { path: 'lazy-loading', component: ClientLandingPageComponent, loadChildren:
  () => import('./webApp/formation/compte-client/compte-client.module').then(
    (m) => m.CompteClientModule
  ) },

  // path non trouvé
   { path: '**', component: Page404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
