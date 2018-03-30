import { Injectable }                                       from '@angular/core';
import { Subject }                                          from 'rxjs/Subject';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import {Observable}                                         from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { About } from './about.model';

@Injectable()
export class AboutService {
  aboutsChanged = new Subject<About[]>();
  aboutChanged = new Subject<About>();
  constructor(private httpClient: HttpClient){}
  
  private abouts: About[];
  private about: About;
  
  getAbouts() {
    this.httpClient.get<About[]>('/api/about', {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (abouts) => {
          console.log(abouts);
          this.setAbouts(abouts);
        }
      );
    return this.abouts
  }
    
  setAbouts(abouts: About[]) {
    this.abouts = abouts;
    this.aboutsChanged.next(this.abouts.slice());
  }
  
  setAbout(about: About) {
    this.about = about;
    // this.aboutChanged.next(this.about);
  }
    
  getAbout() {
    // this.httpClient.get<About>('/api/about/5a8b094a3e37b032e04aaa3a', {
    //   observe: 'body',
    //   responseType: 'json'
    // })
    // .subscribe(
    //   (about) => {
    //       this.setAbout(about);
    //     }
    //   );
    //       console.log(this.about);
    return this.abouts[0];
  }
  
  updateAbout(newAbout: About) {
   this.httpClient.put<About>('/api/about/5a8b094a3e37b032e04aaa3a', newAbout)
    .subscribe();
    // this.aboutChanged.next(this.about.slice())
  }
  
}
