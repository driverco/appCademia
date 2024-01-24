import { NgModule } from '@angular/core';
import { PortalComponent } from './components/portal/portal.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    PortalComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
  ],
  providers: [
  ],
  exports: [PortalComponent],
})
export class CommonsModule {}
