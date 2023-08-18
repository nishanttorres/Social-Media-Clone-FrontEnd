import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../entity/user/user";
import {UserService} from "../../service/user.service";
import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy{
  userList:User[] = [];
  faTrash = faTrash;
  faPen=faPen;
  faPlus=faPlus;
  constructor(private userService:UserService,
              private router:Router) {
  }
  ngOnInit():void{
    this.getAllUser();
  }
  getAllUser():void{
    this.userService.getAllUsers().subscribe((users:User[])=>{
      this.userList = users;
    });
  }
  deleteUserById(id:number):void{
    this.userService.deleteUserById(id).subscribe((response:string)=>{
      alert(response);
      this.getAllUser()
    });
  }
  editUser(user:User):void{
    this.router.navigate([`/editUser/${user.id}`]);
  }

  ngOnDestroy(): void {
  }

}
