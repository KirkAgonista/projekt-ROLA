import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }                 from 'rxjs/Subscription';
import { Router }                       from '@angular/router';

import { PostService }      from '../core/posts/post/post.service';
import { AlbumsService }    from '../core/albums/albums.service';
import { DocumentService }  from '../documents/document.service';
import { AboutService }     from '../core/about/about.service';
import { Post }             from '../core/posts/post/post.model';
import { Album }            from '../core/albums/albums.model';
import { Document }         from '../documents/document.model';
import { About }            from '../core/about/about.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  menuMode: string = "menu";
  selectedPost: Post;
  selectedDocument: Document;
  
  albums: Album[];
  subscriptionAlbums: Subscription;
  
  posts: Post[];
  subscriptionPosts: Subscription;
  
  abouts: About[];
  subscriptionAbout: Subscription;
  
  documents: Document[];
  subscriptionDocuments: Subscription;
  
  constructor(
    private router: Router,
    private postService: PostService,
    private albumsService: AlbumsService,
    private documentService: DocumentService,
    private aboutService: AboutService
  ) { }

  ngOnInit() {
    this.subscriptionPosts = this.postService.postsChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
    this.posts = this.postService.getPosts();
    
    this.subscriptionDocuments = this.documentService.documentsChanged
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        }
      );
    this.documents = this.documentService.getDocuments();
    
    this.subscriptionAlbums = this.albumsService.albumsChanged
      .subscribe(
        (albums: Album[]) => {
          this.albums = albums;
        }
      );
    this.albums = this.albumsService.getAlbums();
    
     this.subscriptionAbout = this.aboutService.aboutsChanged
      .subscribe(
        (abouts: About[]) => {
          this.abouts = abouts;
        }
      );
    this.abouts = this.aboutService.getAbouts();
  }
  
  onAlbumEdit(iAlbum: number) {
    let _albumId = this.albumsService.getId(iAlbum);
    this.router.navigate(['/albums', _albumId, 'edit'], { queryParams: {id: iAlbum}});
  }

  onPostEdit(iPost: number, post) {
    this.selectedPost = post;
    let _id = this.postService.getId(iPost);
    this.router.navigate(['/', _id, 'edit'], { queryParams: {id: iPost}});
  }
  
  onDocumentEdit(iDocument: number, document) {
    this.selectedDocument = document;
    let _documentsId = this.documentService.getId(iDocument);
    this.router.navigate(['/documents/', _documentsId, 'edit'], { queryParams: {id: iDocument}});
  }

  ngOnDestroy() {
    this.subscriptionPosts.unsubscribe();
    this.subscriptionAlbums.unsubscribe();
    this.subscriptionDocuments.unsubscribe();
    this.subscriptionAbout.unsubscribe();
  }

}
