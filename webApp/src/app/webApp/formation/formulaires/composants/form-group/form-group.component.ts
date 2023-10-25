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
      prenom: new FormControl<string | null>(null)
    })
  }

}