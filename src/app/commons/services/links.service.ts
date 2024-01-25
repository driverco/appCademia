import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {
  getLinksData() {
    return [
      {
        id: '4',
        label: 'configuration',
        icon: 'settings',
        items: [
          {
            id: '41',
            label: 'security',
            icon: 'security',
            routerLink: '/users',
            items: [
              {
                id: '411',
                label: 'Usuarios',
                icon: 'group',
                routerLink: '/users',
              },
            ],
              },
        ],
      },
    ];
  }
  getLinksSmall() {
    return Promise.resolve(this.getLinksData().slice(0, 10));
  }

  getLinks() {
    return  Promise.resolve(this.getLinksData());
  }
}
