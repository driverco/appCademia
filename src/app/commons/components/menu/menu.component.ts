import { Component } from '@angular/core';
import { LinksService } from '../../services/links.service';
import { Router } from '@angular/router';
import { APPTITLE, VERSION } from '../../globals/constants';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'commons-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  appTitle = APPTITLE;
  version = VERSION;
  menuItems:any[] = [];

  constructor(
    private linksService: LinksService,
    private router: Router,
    private translocoService: TranslocoService
  ) {this.linksService.getLinks().then((links) => { this.menuItems = links })}
}
