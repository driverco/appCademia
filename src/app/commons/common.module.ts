import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './components/portal/portal.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { LangmenuComponent } from './components/langmenu/langmenu.component';

@NgModule({
  declarations: [PortalComponent, HomeComponent, MenuComponent, LangmenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    TranslocoModule,
    RouterModule
  ],
  providers: [],
  exports: [PortalComponent],
})
export class CommonsModule {}
