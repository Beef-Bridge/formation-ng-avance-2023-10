import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilModule } from './webApp/root/accueil/accueil.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';

import { rootReducer } from './webApp/formation/ngrx-store/reducers/root-reducers';
import { metaReducersX } from './webApp/formation/ngrx-store/reducers/meta-reducers';
// import { appEffects } from './webApp/formation/ngrx-store/effects/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AccueilModule, BrowserAnimationsModule,
    // NGRx - Store
    StoreModule.forRoot(
      {
        // rootReducer: formate le store (modifie)
        // nom à notre state (root): reducer principal
        root: rootReducer
        // STATE_NAME: rootReducer
      },
      { // metaReducer
        metaReducers: metaReducersX
      }
    ),
    EffectsModule.forRoot([
      // appEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
