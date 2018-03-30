import { Component, OnInit, Input } from '@angular/core';
import { Router }                   from '@angular/router';

import { Post }         from './post.model'
import { PostService }  from './post.service'
import { AuthService }  from '../../auth/auth.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() id: number;
    _id: string;
  constructor(private postService: PostService, public authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  onEditPost() {
    this._id = this.postService.getId(this.id);
    this.router.navigate(['/', this._id, 'edit'], { queryParams: {id: this.id}});
  }
  


}
