import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteClientRoutingModule } from './compte-client-routing.module';
import { ClientLandingPageComponent } from './composants/client-landing-page/client-landing-page.component';
import { ClientHeaderComponent } from './composants/client-header/client-header.component';
import { ClientBodyComponent } from './composants/client-body/client-body.component';
import { ClientFooterComponent } from './composants/client-footer/client-footer.component';
import { ClientMonEspaceComponent } from './composants-routing/client-mon-espace/client-mon-espace.component';
import { ClientMesCommandesComponent } from './composants-routing/client-mes-commandes/client-mes-commandes.component';
import { ClientMesLivraisonsComponent } from './composants-routing/client-mes-livraisons/client-mes-livraisons.component';


@NgModule({
  declarations: [
    ClientLandingPageComponent,
    ClientHeaderComponent,
    ClientBodyComponent,
    ClientFooterComponent,
    ClientMonEspaceComponent,
    ClientMesCommandesComponent,
    ClientMesLivraisonsComponent
  ],
  imports: [
    CommonModule,
    CompteClientRoutingModule
  ]
})
export class CompteClientModule { }
