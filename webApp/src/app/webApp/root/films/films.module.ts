import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeDesFilmsComponent } from './composants/films/liste-des-films.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilmsPipe } from 'src/app/sharedModels/pipes/films.pipe';
import { FilmsDetailsComponent } from './composants/films-details/films-details.component';
import { SeeMorePipe } from 'src/app/sharedModels/pipes/see-more.pipe';


@NgModule({
  declarations: [ ListeDesFilmsComponent, FilmsPipe, SeeMorePipe, FilmsDetailsComponent ],
  imports: [ CommonModule, HttpClientModule,  FormsModule ],
  exports: [  ListeDesFilmsComponent,  FilmsDetailsComponent ]
})
export class FilmsModule { }
