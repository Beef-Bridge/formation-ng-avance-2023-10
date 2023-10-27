import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/sharedModels/services/post.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  // props
  public monForm: FormGroup;

  // constructor
  constructor(private _post: PostService) {
    this.monForm = new FormGroup({
      // --------------------------------------
      prenom: new FormControl<string | null>(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      nom: new FormControl<string | null>(null, [Validators.required]),
      email: new FormControl<string | null>(null, [
        // Validators.pattern('^[a-z0-9._-]+@[a-z0-9.-]+\\.[a-z]{2,}$'),
        // Validators.required
      ]),
      // --------------------------------------
      adresse: new FormGroup({
        rue: new FormControl<string | null>(null),
        ville: new FormControl<string | null>(null, Validators.required),
        cp: new FormControl<string | null>(null),
      }),
    });
  }

  // Méthodes
  get getAdresse() {
    return this.monForm.get('adresse') as FormGroup;
  }

  public onSubmit = () => {
    this.monForm.markAllAsTouched();
    // c'est comme si on avait touché les champs
    if (this.monForm.valid) {
      console.log('Groupe principal : ', this.monForm.value);
      console.log('Sous Groupe : ', this.monForm.controls['adresse'].value);
      // console.log('Sous Groupe : ', this.monForm.controls['tp'].value);
      this._post.postForm(this.monForm);
    }
  };

  // cycle de vie
  ngAfterViewInit() {
    console.warn('ngAfterViewInit');
    this.monForm.controls['prenom'].valueChanges.subscribe(
      // observer Next
      (fieldPrenom: any) => {
        if (fieldPrenom.length != undefined && fieldPrenom.length > 5) {
          // hors contexte ==> pour montrer qq méthodes et le potentiel des reactive forms en TS
          //this.monForm.controls['prenom'].reset();
          // this.monForm.controls['prenom'].patchValue('Trop Long');
        }
      }
    );
  }

  ngAfterViewChecked() {
    console.warn('ngAfterViewChecked');

    const eltIcone = <HTMLElement>document.querySelector('#icone-prenom');

    this.monForm.controls['prenom'].valueChanges.subscribe(
      (fieldPrenom: any) => {
        if (fieldPrenom.length < 3 || fieldPrenom.length > 10) {
          eltIcone.style.color = 'red';
        } else {
          eltIcone.style.color = 'green';
        }
      }
    );
  }
}
