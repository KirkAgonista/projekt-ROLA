import { Component, OnInit } from '@angular/core';

import { ComponentVisibilityService } from './component-visibility.service';
import { AuthService }                from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  documentState: Boolean = false;
  menuState: Boolean = false;
  animateMenu: Boolean = false;
  animateDocument: Boolean = false;
  
  constructor(private componentVisibilityService: ComponentVisibilityService, public authService: AuthService){}
  
  ngOnInit() {
    this.componentVisibilityService.currentStateOfDocument.subscribe(documentState => this.documentState = documentState);
    this.componentVisibilityService.currentStateOfMenu.subscribe(menuState => this.menuState = menuState);
    this.componentVisibilityService.currentAnimateDocument.subscribe(documentState => this.animateDocument = documentState);
    this.componentVisibilityService.currentAnimateMenu.subscribe(menuState => this.animateMenu = menuState);
  }

}

  