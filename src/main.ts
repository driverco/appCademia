/// <reference types="@angular/localize" />

import { TRANSLATIONS, TRANSLATIONS_FORMAT, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  if (localStorage.getItem('locale') === null) {
    localStorage.setItem('locale', 'en');
    }

    const locale = localStorage.getItem('locale');
    //declare const require;
    const translations = `raw-loader!./locale/messages.${locale}.xlf`;

    platformBrowserDynamic().bootstrapModule(AppModule, {
      providers: [
        {provide: TRANSLATIONS, useValue: translations},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
      ]
    });
