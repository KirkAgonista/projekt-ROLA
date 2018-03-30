import { Component, OnInit, OnDestroy }   from '@angular/core';
import { Subscription }                   from 'rxjs/Subscription';

import { Post }         from './post/post.model';
import { PostService }  from './post/post.service';
import { AuthService }  from '../auth/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[];
  subscription: Subscription;
  
  constructor(private postService: PostService, public authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.postService.postsChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
    this.posts = this.postService.getPosts();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
