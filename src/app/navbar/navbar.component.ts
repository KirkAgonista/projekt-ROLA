import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { ComponentVisibilityService } from '../component-visibility.service';
import { AuthService }                from '../core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  documentState: boolean = false;
  menuState: boolean = false;
  signinState: boolean;
  
  constructor(private componentVisibilityService: ComponentVisibilityService,private router: Router, public authService: AuthService) { }

  ngOnInit() {
    if(this.authService.isAuthenticated) {
      this.signinState = false;
    } else {
      this.signinState = true;
    }
    this.componentVisibilityService.currentStateOfDocument.subscribe(documentState => this.documentState = documentState)
    this.componentVisibilityService.currentStateOfMenu.subscribe(menuState => this.menuState = menuState)
  }
  
  onDocumentClick() {
    this.documentState = !this.documentState; 
    this.componentVisibilityService.changeDocumentState(this.documentState);
    this.componentVisibilityService.onAnimateDocument(this.documentState)
  }
  
  onMenuClick() {
    this.menuState = !this.menuState; 
    this.componentVisibilityService.changeMenuState(this.menuState);
    this.componentVisibilityService.onAnimateMenu(this.menuState);
  }
  
  onSigninOrLogout(){
    if(this.signinState) {
      this.router.navigate(['/signin']);
      this.signinState = false;
    } else {
      this.authService.logout();
      this.router.navigate(['/home']);
      this.signinState = true;
    }
  }
}
