import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewUserComponent} from "./pages/new-user/new-user.component";
import {UserListComponent} from "./pages/user-list/user-list.component";
import {PostListComponent} from "./pages/post-list/post-list.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {CommentListComponent} from "./pages/comment-list/comment-list.component";

const routes: Routes = [
  {path:'addUser', component:NewUserComponent},
  {path:'user', component:UserListComponent},
  {path:'post/userId/:id', component:PostListComponent},
  {path:'editUser/:id', component:NewUserComponent},
  {path:'signIn', component:SignInComponent},
  {path:'signUp', component:NewUserComponent},
  {path:'', component:CommentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
