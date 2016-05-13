import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NgTasklistAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgTasklistAppComponent);
