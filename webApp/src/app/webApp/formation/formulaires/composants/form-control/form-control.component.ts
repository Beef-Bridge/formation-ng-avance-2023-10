import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent {
  // props
  public prenom: FormControl<string | null>;
  public choix1: FormControl<boolean>;
  public choix2: FormControl<boolean>;
  public message: FormControl<string | null>;

  // constructor
  constructor() {
    this.prenom = new FormControl(
      // val par défaut
      null,
      [
        Validators.required, // + performant qu'une validation HTML par le browser
        Validators.minLength(3)
      ]
    );
    this.choix1 = new FormControl(true, {
      //  options
      nonNullable: true,
    });
    this.choix2 = new FormControl(false, {
      //  options
      nonNullable: true,
    });
    this.message = new FormControl(
      {
        // attributs HTML
        value: null,
        disabled: false,
      },
      [
        Validators.required,
        Validators.maxLength(5)
      ]
    );
  }

  // ----------------------------------
  ngOnInit(): void {
    this.prenom.valueChanges.subscribe((field: any) => {
      if (field.length != undefined && field.length >= 5) {
        // this.prenom.reset();
        this.prenom.patchValue('Trop Long !');
        const elt = <HTMLElement>document.querySelector('#icone');
        elt.style.color = 'red';
      }
    });
  }
}
