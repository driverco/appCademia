import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'commons-langmenu',
  templateUrl: './langmenu.component.html',
  styleUrls: ['./langmenu.component.css']
})
export class LangmenuComponent {
  constructor(
    private translocoService: TranslocoService
  ) {}

  changeLang(lang: string): void {

    this.translocoService.setActiveLang(lang);
  }

}
