import { Component, OnInit, OnDestroy }                   from '@angular/core';
import { Router }                                         from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators }  from '@angular/forms';
import { Subscription }                                   from 'rxjs';
import { Location }                                       from '@angular/common';

import { About }        from '../about.model';
import { AboutService } from '../about.service';

import Quill from 'quill';

// Add fonts to whitelist
var Font = Quill.import('formats/font');
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['mirza', 'aref', 'sans-serif', 'monospace', 'serif'];
Quill.register(Font, true);

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit, OnDestroy {
  aboutForm: FormGroup;
  abouts: About[];
  subscriptionAbout: Subscription;
  constructor(private aboutService: AboutService, private router: Router, private _location: Location) { }

  ngOnInit() {
    this.subscriptionAbout = this.aboutService.aboutsChanged
      .subscribe(
        (abouts: About[]) => {
          this.abouts = abouts;
        }
      );
    this.initForm();
  }  
  
  ngOnDestroy() {
    this.subscriptionAbout.unsubscribe();
  }
  
  onSubmit() {
    const newAbout = new About (
      this.aboutForm.value['img'],
      this.aboutForm.value['content']
    );
    this.aboutService.updateAbout(newAbout);
    this.router.navigate(['/about']);

  }
  
  private initForm() {
    this.abouts = this.aboutService.getAbouts();
    console.log(this.abouts[0]);
    let aboutImg = this.abouts[0].img;
    let aboutContent = this.abouts[0].content;
    
    
    this.aboutForm = new FormGroup({
      'img': new FormControl(aboutImg, Validators.required),
      'content': new FormControl(aboutContent, Validators.required),
    })
  }
  
  onCancel(){
    this._location.back();
  }
  
}
