import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Formation } from 'src/app/sharedModels/models/interfaces/formation';

interface Formation {
  formation: string;
  niveau: string;
}

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {

  public cursus: FormGroup;
// ------------------------------------------
  constructor(private _fb: FormBuilder) {

    this.cursus = this._fb.group({
      nomCursus: '',
      // définition du 2nd champ qui va être un tableau(ensemble) de formulaire
      formationsArray: this._fb.array([])
    });
  }
  // un getter qui va nous retourner le formationsArray
  get getFormations(): FormArray {
    return this.cursus.get('formationsArray') as FormArray;
  }

  // --------- Méthodes ------------------
  public addFormation = () => {
    this.getFormations.push(this.newFormation());
  }
  // méthode qui crée un nouveau formgroup
  // avec la formation et le niveau

  private newFormation = (): FormGroup<any> => {
    return this._fb.group({  // définition du formGroup
      formation: [null as string | null, Validators.required],
      niveau: ''
    });
  }
  // -------------------------
  public delFormation = (i: number) => {
    this.getFormations.removeAt(i);
  }

}