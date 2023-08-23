import { Component } from '@angular/core';
import {faArrowRight, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  signout = faArrowRight;
  addUser = faUserPlus;
  constructor(private router:Router) {
  }
  navigateToSignIn():void{
    this.router.navigate(['signIn']);
  }
  navigateToFindUser():void{
    this.router.navigate(['findUser']);
  }
}
