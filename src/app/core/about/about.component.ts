import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }                 from 'rxjs';

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component.js';
import Quill                    from 'quill';

import { About }        from './about.model';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  abouts: About[];
  subscription: Subscription;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.subscription = this.aboutService.aboutsChanged
      .subscribe(
        (abouts: About[]) => {
          this.abouts = abouts;
        }
      );
    this.abouts = this.aboutService.getAbouts();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
