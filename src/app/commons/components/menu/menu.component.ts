import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LinksService } from '../../services/links.service';
import { Router } from '@angular/router';

@Component({
  selector: 'commons-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  auth: boolean = false;
  items: MenuItem[] | undefined;
  visible: boolean = false;

  constructor(
    private linksService: LinksService,
    private router: Router
  ) {
  }
  showDialog() {
    this.visible = true;
  }
  closeDialog(mapId: string) {
    this.visible = false;
    this.router.navigate(['/maps/' + mapId]);
  }
}
