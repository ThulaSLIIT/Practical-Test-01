import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';

const routes: Routes = [

  { path:'', component: BookmarkComponent},
  { path:'addbookmark', component: AddBookmarkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
