import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ComponentVisibilityService {
  private documentClicked = new BehaviorSubject<boolean>(false);
  private menuClicked = new BehaviorSubject<boolean>(false);
  private animateDocument = new BehaviorSubject<boolean>(false);
  private animateMenu = new BehaviorSubject<boolean>(false);
  
  currentStateOfDocument = this.documentClicked.asObservable();
  currentStateOfMenu = this.menuClicked.asObservable();  
  currentAnimateDocument = this.animateDocument.asObservable();
  currentAnimateMenu = this.animateMenu.asObservable();
    
  changeDocumentState(documentState: boolean) {
    this.documentClicked.next(documentState);
  } 
  
  changeMenuState(menuState: boolean) {
    this.menuClicked.next(menuState);
  }    
  
  onAnimateDocument(documentState: boolean) {
    if(!documentState) {
      setTimeout(() => this.animateDocument.next(documentState), 630)
    }
    else {
      this.animateDocument.next(documentState)
    }
  } 
  
  onAnimateMenu(menuState: boolean) {
    if(!menuState) {
      setTimeout(() => this.animateMenu.next(menuState), 630)
    }
    else {
      this.animateMenu.next(menuState)
    }
  }
  
  constructor() { }

}
