import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }                 from 'rxjs/Subscription';

import { Album }          from './albums.model';
import { AlbumsService }  from './albums.service';
import { AuthService }    from '../auth/auth.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
albums: Album[];
  subscription: Subscription;
  
  constructor(private albumsService: AlbumsService, public authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.albumsService.albumsChanged
      .subscribe(
        (albums: Album[]) => {
          this.albums = albums;
        }
      );
    this.albums = this.albumsService.getAlbums();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
