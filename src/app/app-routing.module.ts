import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewUserComponent} from "./pages/new-user/new-user.component";
import {UserListComponent} from "./pages/user-list/user-list.component";
import {PostListComponent} from "./pages/post-list/post-list.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {NavBarComponent} from "./pages/nav-bar/nav-bar/nav-bar.component";
import {SearchUsersToFollowComponent} from "./pages/search-users-to-follow/search-users-to-follow.component";

const routes: Routes = [
  {path:'addUser', component:NewUserComponent},
  {path:'user', component:UserListComponent},
  {path:'post/userId/:id', component:PostListComponent},
  {path:'editUser/:id', component:NewUserComponent},
  {path:'signIn', component:SignInComponent},
  {path:'signUp', component:NewUserComponent},
  {path:'', component:NavBarComponent},
  {path:'findUser', component:SearchUsersToFollowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
