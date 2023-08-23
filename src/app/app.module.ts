import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import { NewUserComponent } from './pages/new-user/new-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar/nav-bar.component';
import { SearchUsersToFollowComponent } from './pages/search-users-to-follow/search-users-to-follow.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    UserListComponent,
    NewUserComponent,
    SignInComponent,
    NavBarComponent,
    SearchUsersToFollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
