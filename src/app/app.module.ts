import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonsModule } from './commons/common.module';
import { LinksService } from './commons/services/links.service';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { NotFoundComponent } from './commons/components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true // <-- enable this feature
    }),
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule
  ],
  providers: [LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
