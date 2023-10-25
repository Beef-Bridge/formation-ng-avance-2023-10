import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FilmsModule } from '../films/films.module';
import { I18nComponent } from '../../formation/i18n/i18n.component';
import { PwaComponent } from '../../formation/pwa/pwa.component';
import { TpExosModule } from '../../formation/tp/tp.module';
import { FirebaseModule } from '../../formation/firestore-firebase/firebase.module';
import { FormulairesModule } from '../../formation/formulaires/formulaires.module';
import { NgrxModule } from '../../formation/ngrx-store/ngrx.module';
import { TuModule } from '../../formation/test-unitaires/tu.module';

@NgModule({
  declarations: [
    // Composants
    LandingPageComponent, HeaderComponent, BodyComponent, FooterComponent, I18nComponent, PwaComponent,
    // Pipes & Directives
  ],
  imports: [
    CommonModule, RouterModule, NgrxModule,
    FilmsModule,FirebaseModule, TpExosModule, FormulairesModule, TuModule
  ],
  exports: [
    LandingPageComponent, HeaderComponent, BodyComponent, FooterComponent
  ]
})
export class AccueilModule { }
