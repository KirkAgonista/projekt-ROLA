import { NgModule }                                 from '@angular/core';
import { Routes, RouterModule, PreloadAllModules }  from '@angular/router';

import { LandingComponent }                         from './core/landing/landing.component';
import { AboutComponent }                           from './core/about/about.component';
import { AboutEditComponent }                       from './core/about/about-edit/about-edit.component';
import { HomeComponent }                            from './core/home/home.component';
import { AlbumsComponent }                          from './core/albums/albums.component';
import { PostEditComponent }                        from './core/posts/post-edit/post-edit.component';
import { AlbumsEditComponent }                      from './core/albums/albums-edit/albums-edit.component';
import { DocumentsEditComponent }                   from './documents/documents-edit/documents-edit.component';
import { SigninComponent }                          from './core/auth/signin/signin.component';
import { AuthGuard }                                from './core/auth/auth-guard.service';

 const appRoutes: Routes = [
     { path: '',  component: LandingComponent},
     { path: 'home', component: HomeComponent},
     { path: 'signin', component: SigninComponent},
     { path: 'new', component: PostEditComponent, canActivate: [AuthGuard]},
     { path: 'about', component: AboutComponent},
     { path: 'about/edit', component: AboutEditComponent, canActivate: [AuthGuard]},
     { path: 'albums', component: AlbumsComponent},
     { path: 'albums/new', component: AlbumsEditComponent, canActivate: [AuthGuard]},
     { path: 'albums/:_id/edit', component: AlbumsEditComponent, canActivate: [AuthGuard]},
     { path: 'documents/new', component: DocumentsEditComponent, canActivate: [AuthGuard]},
     { path: 'documents/:_id/edit', component: DocumentsEditComponent, canActivate: [AuthGuard]},
     { path: ':_id/edit', component: PostEditComponent, canActivate: [AuthGuard]},
     { path: '**', component: HomeComponent}
     

     ];
 
 @NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}