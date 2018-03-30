import { Component, OnInit, OnDestroy }                   from '@angular/core';
import { ActivatedRoute, Params, Router }                 from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators }  from '@angular/forms';
import { Subscription }                                   from 'rxjs/Subscription';
import { Location }                                       from '@angular/common';

import { Post }         from '../post/post.model';
import { PostService }  from '../post/post.service';

import Quill from 'quill';

// Add fonts to whitelist
var Font = Quill.import('formats/font');
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['mirza', 'aref', 'sans-serif', 'monospace', 'serif'];
Quill.register(Font, true);


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, OnDestroy {
  id;
  _id: string;
  editMode = false;
  postForm: FormGroup;
  post: Post;
  subscribeParams: Subscription;
  subscribeQueryParams: Subscription;
    
  placements: string[] = ['top', 'left', 'right', 'bottom'];
  popoverTitle: string = 'Czy jesteś pewny?';
  popoverMessage: string = 'Ale tak na 100% pewien?';
  confirmText: string = 'Tak';
  cancelText: string = 'Nie';
  confirmClicked: boolean = false;
  cancelClicked: boolean = false;
  
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, private _location: Location) { }
  
  ngOnInit() {
   this.subscribeQueryParams = this.route.queryParams.subscribe((params)=> {
        this.id = params['id'];
      });
    this.subscribeParams = this.route.params
      .subscribe(
          (params: Params) => {
            this._id = params['_id'];
            this.editMode = params['_id'] != null;
            this.initFormPost();
          }
        );
  }
  
  onSubmit() {
    const newPost = new Post(
      this.postForm.value['titlePost'],
      new Date().toLocaleString(),
      "DW",
      this.postForm.value['contentPost'],
      this.postForm.value['imagePath']
    )
  if (this.editMode) {
    this.postService.updatePost(newPost, this._id)
  }
  else {
    console.log(newPost)
    this.postService.createPost(newPost)
    }
    this.router.navigate(['/home'])    
  }
  
  private initFormPost() {
    let postTitle = '';
    let postImagePath = new FormArray([]);
    let contentPost = '';
    
    if (this.editMode) {
      this.post = this.postService.getPost(this.id);
      postTitle = this.post.titlePost;
      if(this.post['imagePath']) {
        for (let image of this.post.imagePath) {
          postImagePath.push(new FormControl(image))
        }
      }
      contentPost = this.post.contentPost;
    }
    
    if(this.postForm) {
      this.postForm.reset({
        'titlePost': postTitle,
        'contentPost': contentPost,
      })
      this.postForm.controls['imagePath'] = postImagePath;
    } 
    else {
      this.postForm = new FormGroup({
        'titlePost': new FormControl(postTitle, Validators.required),
        'contentPost': new FormControl(contentPost, Validators.required),
        'imagePath': postImagePath
      })
    }
  }
  
  onAddImage(){
    (<FormArray>this.postForm.get('imagePath')).push(new FormControl())
  }
  
  onCancel(){
    this._location.back();
  }
  
  onDeleteImage(index: number) {
    (<FormArray>this.postForm.get('imagePath')).removeAt(index);
  }
  
  onDeletePost() {
    this._id = this.postService.getId(this.id);
    this.postService.deletePost(this.id, this._id);
    this.postService.getPosts();
    this.onCancel();
  }
  
  ngOnDestroy() {
    this.subscribeParams.unsubscribe();
    this.subscribeQueryParams.unsubscribe();
  }
}
