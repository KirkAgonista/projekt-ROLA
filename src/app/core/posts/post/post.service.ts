import { Injectable }                                       from '@angular/core';
import { Subject }                                          from 'rxjs/Subject';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable }                                       from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Post } from './post.model';

@Injectable()
export class PostService {
  postsChanged = new Subject<Post[]>();
  constructor(private httpClient: HttpClient){}
  
  private posts: Post[];
  
  getPosts() {
    this.httpClient.get<Post[]>('/api/posts', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (posts) => {
          for (let post of posts) {
            if (!post['imagePath']) {
              post['imagePath'] = [];
            }
          }
          return posts;
        }
      )
      .subscribe(
        (posts) => {
          console.log(posts);
          this.setPosts(posts);
        }
      );
    return this.posts
  }
    
  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }
    
  getPost(id: number) {
      return this.posts[id];
  }
  
  createPost(post: Post) {
   this.httpClient.post<Post>('/api/posts', post)
    .subscribe(
      (post: Post) => {
        this.posts.splice(0,0, post);
        this.postsChanged.next(this.posts.slice())
      }
    );
  // this.postsChanged.next(this.posts.slice())
  }
    
  updatePost(newPost: Post, _id: string) {
   this.httpClient.put<Post>('/api/posts/'+_id, newPost)
    .subscribe();
    this.postsChanged.next(this.posts.slice())
  }
  
  deletePost(index: number, _id: string) {
    this.httpClient.delete<Post>('/api/posts/'+_id)
    .subscribe();
    this.postsChanged.next(this.posts.slice())
  }
  
  getId(id:number) {
    return this.posts[id]._id;
  }

}
