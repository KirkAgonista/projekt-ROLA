import { Component, OnInit, OnDestroy }                   from '@angular/core';
import { ActivatedRoute, Params, Router }                 from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators }  from '@angular/forms';
import { Subscription }                                   from 'rxjs/Subscription';
import { Location }                                       from '@angular/common';

import { Album }          from '../albums.model';
import { AlbumsService }  from '../albums.service';

@Component({
  selector: 'app-albums-edit',
  templateUrl: './albums-edit.component.html',
  styleUrls: ['./albums-edit.component.css']
})
export class AlbumsEditComponent implements OnInit, OnDestroy {
  id;
  _id: string;
  editMode = false;
  albumForm: FormGroup;
  album: Album;
  subscribeParams: Subscription;
  subscribeQueryParams: Subscription;
  
  placements: string[] = ['top', 'left', 'right', 'bottom'];
  popoverTitle: string = 'Czy jesteś pewny?';
  popoverMessage: string = 'Ale tak na 100% pewien?';
  confirmText: string = 'Tak';
  cancelText: string = 'Nie';
  confirmClicked: boolean = false;
  cancelClicked: boolean = false;
  
  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService, private _location: Location) { }
  
  ngOnInit() {
   this.subscribeQueryParams = this.route.queryParams.subscribe((params)=> {
        this.id = params['id'];
      });
    this.subscribeParams = this.route.params
      .subscribe(
          (params: Params) => {
            this._id = params['_id'];
            this.editMode = params['_id'] != null;
            this.initForm();
          }
        );
  }
  
  onSubmit() {
    const newAlbum = new Album(
      this.albumForm.value['img'],
      this.albumForm.value['url'],
      this.albumForm.value['caption']
    )
  if (this.editMode) {
    console.log(this._id, newAlbum)
    this.albumsService.updateAlbum(newAlbum, this._id)
  }
  else {
    console.log(newAlbum)
    this.albumsService.createAlbum(newAlbum)
    }
    this.router.navigate(['/albums'])    
  }
  
  private initForm() {
    let albumImg = '';
    let albumUrl = '';
    let albumCaption = '';
    
    
    if (this.editMode) {
      console.log(this.id)
      this.album = this.albumsService.getAlbum(this.id);
      albumImg = this.album.img;
      albumUrl = this.album.url;
      albumCaption = this.album.caption;
    }
    
    this.albumForm = new FormGroup({
      'img': new FormControl(albumImg, Validators.required),
      'url': new FormControl(albumUrl, Validators.required),
      'caption': new FormControl(albumCaption, Validators.required)
    })
  }
  
  onCancel(){
    this._location.back();
  }

  onDeleteAlbum() {
    this._id = this.albumsService.getId(this.id);
    this.albumsService.deleteAlbum(this.id, this._id);
    this.albumsService.getAlbums();
    this.onCancel();
  }
  
  ngOnDestroy() {
    this.subscribeParams.unsubscribe();
    this.subscribeQueryParams.unsubscribe();
  }
}
