import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { PostsComponent } from '../components/posts/posts.component';
import { UserComponent } from '../components/user/user.component';
import { PostComponent } from '../components/post/post.component'
import { NotFoundComponent } from '../components/not-found/not-found.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UserComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
