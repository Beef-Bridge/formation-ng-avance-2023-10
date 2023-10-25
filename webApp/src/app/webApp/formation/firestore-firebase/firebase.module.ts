import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseComponent } from './composants/firebase/firebase.component';
import { ListeDesFilmsComponent } from './composants/films/liste-des-films.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmsDetailsComponent } from './composants/films-details/films-details.component';

// ----------------------------------
//    CLOUD FIRESTORE 7
// ----------------------------------
import { firebaseConfig } from '../../../sharedModels/environments/environements';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

@NgModule({
  declarations: [FirebaseComponent, ListeDesFilmsComponent , FilmsDetailsComponent ],
  imports: [CommonModule, HttpClientModule,    
    provideFirestore(() => getFirestore()), // liaison vers le store   
    provideFirebaseApp(() => initializeApp(firebaseConfig))
     // init du projet NG vers l'appli utilisée dans Firebase (RealTime DB, pushMessaging)
  ]
})
export class FirebaseModule { }
