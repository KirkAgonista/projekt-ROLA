import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }                     from '@angular/common';
import { HttpClientModule }                 from '@angular/common/http';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';

import { AppComponent }             from './app.component';
import { UserComponent }            from './user/user.component';
import { DocumentsComponent }       from './documents/documents.component';
import { DocumentsEditComponent }   from './documents/documents-edit/documents-edit.component';
import { NavbarComponent }          from './navbar/navbar.component';

import { AppRoutingModule }         from './app-routing.module';
import { CoreModule }               from './core/core.module';
import { PostService }              from './core/posts/post/post.service';
import { AboutService }             from './core/about/about.service';
import { AuthService }              from './core/auth/auth.service';
import { AlbumsService }            from './core/albums/albums.service';
import { DocumentService }          from './documents/document.service';
import { ComponentVisibilityService }from './component-visibility.service';
import { AuthGuard }                from './core/auth/auth-guard.service';

// import { NgbModule }                from '@ng-bootstrap/ng-bootstrap';
import { QuillModule }              from 'ngx-quill/src/quill.module';
import { ConfirmationPopoverModule }from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    DocumentsComponent,
    DocumentsEditComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    HttpClientModule,
    QuillModule,
    // NgbModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  providers: [
    PostService,
    AlbumsService,
    DocumentService,
    AuthService,
    AboutService,
    ComponentVisibilityService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
