import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss']
})
export class I18nComponent {

  public title:string=$localize `:@@titre:Traduction Angular !`;

}
