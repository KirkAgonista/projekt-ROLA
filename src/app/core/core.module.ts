import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }                    from '@angular/platform-browser';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { HttpModule }                       from '@angular/http';
import { HttpClientModule }                 from '@angular/common/http';

import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from '../app-routing.module';


import { AboutComponent }      from './about/about.component';
import { HomeComponent }       from './home/home.component';
import { AlbumsComponent }     from './albums/albums.component';
import { PostsComponent }      from './posts/posts.component';
import { PostComponent }       from './posts/post/post.component';
import { PostEditComponent }   from './posts/post-edit/post-edit.component';
import { AlbumsEditComponent } from './albums/albums-edit/albums-edit.component';
import { SigninComponent }     from './auth/signin/signin.component';
import { AboutEditComponent }  from './about/about-edit/about-edit.component';

import { QuillModule }      from 'ngx-quill/src/quill.module';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
    declarations: [
        LandingComponent,
        AboutComponent,
        AboutEditComponent,
        HomeComponent,
        AlbumsComponent,
        AlbumsEditComponent,
        PostsComponent,
        PostComponent,
        PostEditComponent,
        SigninComponent,
        SanitizeHtmlPipe
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        QuillModule,
        ConfirmationPopoverModule
    ],
    exports: [
        AppRoutingModule
    ]
    
})
export class CoreModule {}