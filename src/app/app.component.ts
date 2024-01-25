import { Component } from '@angular/core';
import { VERSION } from './commons/globals/constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'appCademia V'+VERSION;
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }



}
