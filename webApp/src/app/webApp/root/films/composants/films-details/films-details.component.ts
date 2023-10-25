import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Films } from 'src/app/sharedModels/models/class/films';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent {

  @Input() childFilm: Films;
  @Output() outputEvent: EventEmitter<any>;

  // ------------------------------------------
  constructor() {
    this.childFilm = new Films;
    this.outputEvent = new EventEmitter<any>;
  }

   // ------------------------------------------
  public choixFilm = (e: any) => {   
    console.clear(); console.log(e); console.log(e.target.checked);   

    this.outputEvent.emit({    
      paramIsChecked: e.target.checked, // paramIsChecked:true 
      paramFilm:this.childFilm 
    }
    );
  }
}