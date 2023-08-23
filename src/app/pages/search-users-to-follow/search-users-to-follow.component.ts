import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-search-users-to-follow',
  templateUrl: './search-users-to-follow.component.html',
  styleUrls: ['./search-users-to-follow.component.scss']
})
export class SearchUsersToFollowComponent{
  constructor(private formBuilder:FormBuilder,
              private userService:UserService) {}
  getAllUsers(form:NgForm):void{
    console.log(form.value.search);
  }


}
