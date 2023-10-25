import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent {
  @Input() inputAvis!: any;
  @Output() outputEvent = new EventEmitter<any>();
}
