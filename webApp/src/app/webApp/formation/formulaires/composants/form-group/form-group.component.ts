import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/sharedModels/services/post.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {

  // props
  public monForm: FormGroup;

  // constructor
  constructor(private _post: PostService) {

    this.monForm = new FormGroup({
      // déclaration de tous les controls de ce formulaire (formGroup)
      prenom: new FormControl<string | null>(
        //val par défaut
        null,
        // Validators
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]),
      nom: new FormControl<string | null>(null),
      // email :
      email: new FormControl<string | null>(
        null,
        [
          // options
          // Validators.email,
          // ^:commence par
          // $: finit par
          // [a-z] : toutes les lettres en minuscule de a à z
          // [a-zA-Z0-9] : toutes les lettres min et maj + les chiffres
          // ? : on répéte 0 ou 1 fois
          // + : 1 ou plusieurs fois
          // * : 0 ou plusieurs fois
          // {val min , val max } : pour répéter
          Validators.pattern('^[a-z0-9._-]+@[a-z0-9.-]+\\.[a-z]{2,}$'),
          Validators.required
        ]
      ),
           // ******************************
      adresse: new FormGroup({
        rue: new FormControl<string | null>(null),
        ville: new FormControl<string | null>(null, Validators.required),
        cp: new FormControl<string | null>(null),
      }),
    })
    
  }

}
