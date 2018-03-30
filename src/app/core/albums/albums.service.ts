import { Injectable }                                       from '@angular/core';
import { Subject }                                          from 'rxjs/Subject';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import {Observable}                                         from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Album } from './albums.model';

@Injectable()
export class AlbumsService {
 albumsChanged = new Subject<Album[]>();
  constructor(private httpClient: HttpClient){}
  
  private albums: Album[];
  
  getAlbums() {
    this.httpClient.get<Album[]>('/api/albums', {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (albums) => {
          this.setAlbums(albums.reverse());
        }
      );
    return this.albums
  }
    
  setAlbums(albums: Album[]) {
    this.albums = albums;
    this.albumsChanged.next(this.albums.slice());
  }
    
  getAlbum(id: number) {
      return this.albums[id];
  }
  
  createAlbum(album: Album) {
   this.httpClient.post<Album>('/api/albums', album)
    .subscribe(
      (album: Album) => {
        this.albums.splice(0,0, album);
        this.albumsChanged.next(this.albums.slice())
      }
    );
  }
    
  updateAlbum(newAlbum: Album, _id: string) {
   this.httpClient.put<Album>('/api/albums/'+_id, newAlbum)
    .subscribe();
    this.albumsChanged.next(this.albums.slice())
  }
  
  deleteAlbum(index: number, _id: string) {
    this.httpClient.delete<Album>('/api/albums/'+_id)
    .subscribe();
    this.albumsChanged.next(this.albums.slice())
  }
  
  getId(id:number) {
    return this.albums[id]._id;
  }

}
