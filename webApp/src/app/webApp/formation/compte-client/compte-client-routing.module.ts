import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMonEspaceComponent } from './composants-routing/client-mon-espace/client-mon-espace.component';
import { ClientMesCommandesComponent } from './composants-routing/client-mes-commandes/client-mes-commandes.component';
import { ClientMesLivraisonsComponent } from './composants-routing/client-mes-livraisons/client-mes-livraisons.component';

const routes: Routes = [
  { path: 'mon-espace-client', component: ClientMonEspaceComponent },
  { path: 'mes-commandes', component: ClientMesCommandesComponent },
  { path: 'mes-livraisons', component: ClientMesLivraisonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteClientRoutingModule {}
